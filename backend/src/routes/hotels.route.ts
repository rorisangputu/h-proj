import express, { Router, Response, Request } from 'express';
import Hotel from '../models/hotel.model';
import { HotelSearchResponse } from '../shared/types';

const router = Router();

router.get("/search", async (req: Request, res: Response) => {
    try {
        const query = constructSearchQuery(req.query);

        let sortOptions = {

        };
        switch (req.query.sortOptions) {
            
        }

        
        const pageSize = 5;
        const pageNum = parseInt(req.query.page ? req.query.page.toString() : "1");
        
        //If user asks for page 3 logic is to skip 2 pages and 10 items
        const skip = (pageNum - 1) * pageSize; //Telling db to skip items

        const hotels = await Hotel.find(query).skip(skip).limit(pageSize); 

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