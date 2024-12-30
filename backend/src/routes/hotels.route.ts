import express, { Router, Response, Request } from "express";
import Hotel from "../models/hotel.model";
import { BookingType, HotelSearchResponse } from "../shared/types";
import { param, validationResult } from "express-validator";
import Stripe from "stripe";
import { verifyToken } from "../middleware/auth.middleware";

const stripe = new Stripe(process.env.STRIPE_API_KEY as string);

const router = Router();

router.get("/search", async (req: Request, res: Response) => {
  try {
    const query = constructSearchQuery(req.query);

    let sortOptions = {};
    switch (req.query.sortOptions) {
      case "starRating":
        sortOptions = { starRating: -1 };
        break;

      case "pricePerNightAsc":
        sortOptions = { pricePerNight: 1 };
        break;
      case "pricePerNightDesc":
        sortOptions = { pricePerNight: -1 };
        break;
    }

    const pageSize = 5;
    const pageNum = parseInt(req.query.page ? req.query.page.toString() : "1");

    //If user asks for page 3 logic is to skip 2 pages and 10 items
    const skip = (pageNum - 1) * pageSize; //Telling db to skip items

    const hotels = await Hotel.find(query) //order of below matters
      .sort(sortOptions) //sorts results based on options
      .skip(skip) //Adds paginations results after
      .limit(pageSize);

    const total = await Hotel.countDocuments(query);

    const respone: HotelSearchResponse = {
      data: hotels,
      pagination: {
        total,
        page: pageNum,
        pages: Math.ceil(total / pageSize),
      },
    };

    res.json(respone);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.get(
  "/:id",
  [param("id").notEmpty().withMessage("Hotel ID is required")],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const hotel = await Hotel.findById(req.params.id);
      res.json(hotel);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error fetching hotel" });
    }
  }
);

router.post(
  "/hotelId/bookings/payment-intent",
  verifyToken,
  async (req: Request, res: Response) => {
    //1. Total cost of booking
    //2. Hotel Id
    //3. UserId

    const { numOfNights } = req.body;
    const hotelId = req.params.hotelId;

    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      return res.json(400).json({ message: "Hotel not found" });
    }

    const totalCost = hotel.pricePerNight * numOfNights;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalCost,
      currency: "gbp",
      metadata: {
        hotelId,
        userId: req.userId,
      },
    });
    if (!paymentIntent.client_secret) {
      return res.status(500).json({ message: "Error creating payment intent" });
    }

    const response = {
      paymentIntentId: paymentIntent.id,
      clientSecret: paymentIntent.client_secret.toString(),
      totalCost,
    };
    res.send(response);
  }
);

router.post(
  "/hotelId/bookings",
  verifyToken,
  async (req: Request, res: Response) => {
    try {
      const paymentIntentId = req.body.paymentIntentId;
      const paymentIntent = await stripe.paymentIntents.retrieve(
        paymentIntentId as string
      );

      if (!paymentIntent) {
        return res.status(400).json({ message: "Payment intent not found" });
      }

      if (
        paymentIntent.metadata.hotelId !== req.params.hotelId ||
        paymentIntent.metadata.userId !== req.userId
      ) {
        return res.status(400).json({message: "Payment intent mismatch"})
      }

      if (paymentIntent.status !== "succeeded") {
        return res.status(400).json({message: `Payment intent not succeeded. Status: ${paymentIntent.status}.`})
      }

      const newBooking: BookingType = {
        ...req.body,
        userId: req.userId,
      };

      const hotel = await Hotel.findOneAndUpdate({ _id: req.params.hotelId }, {
        $push: { bookings: newBooking }
      });

      if (!hotel) {
        return res.status(400).json({ message: "Hotel not found" });
      }

      await hotel.save();
      res.status(200).send();

    } catch (error) {
      console.log("Error:", error);
      return res.status(500).json({ message: "Something went wrong" });
    }
  }
);

const constructSearchQuery = (queryParams: any) => {
  let constructedQuery: any = {};

  if (queryParams.destination) {
    constructedQuery.$or = [
      { city: new RegExp(queryParams.destination, "i") },
      { country: new RegExp(queryParams.destination, "i") },
    ];
  }

  if (queryParams.adultCount) {
    constructedQuery.adultCount = {
      $gte: parseInt(queryParams.adultCount),
    };
  }

  if (queryParams.childCount) {
    constructedQuery.childCount = {
      $gte: parseInt(queryParams.childCount),
    };
  }

  if (queryParams.facilities) {
    constructedQuery.facilities = {
      $all: Array.isArray(queryParams.facilities)
        ? queryParams.facilities
        : [queryParams.facilities],
    };
  }

  if (queryParams.types) {
    constructedQuery.type = {
      $in: Array.isArray(queryParams.types)
        ? queryParams.types
        : [queryParams.types],
    };
  }

  if (queryParams.stars) {
    const starRatings = Array.isArray(queryParams.stars)
      ? queryParams.stars.map((star: string) => parseInt(star))
      : parseInt(queryParams.stars);

    constructedQuery.starRating = { $in: starRatings };
  }

  if (queryParams.maxPrice) {
    constructedQuery.pricePerNight = {
      $lte: parseInt(queryParams.maxPrice).toString(),
    };
  }

  return constructedQuery;
};

export default router;
