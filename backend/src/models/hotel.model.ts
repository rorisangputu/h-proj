import { Schema, model } from "mongoose";
import { BookingType, HotelType } from "../shared/types";

const bookingSchema = new Schema<BookingType>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  adultCount: { type: Number, required: true },
  childCount: { type: Number, required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date, required: true },
  userId: { type: String, required: true },
  totalCost: { type: Number, required: true },
});

const hotelSchema = new Schema<HotelType>({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    adultCount: { type: Number, required: true },
    childCount: { type: Number, required: true },
    pricePerNight: { type: Number, required: true },
    starRating: { type: Number, required: true, min: 1, max: 5 },
    facilities: [{ type: String, required: true }],
    imageUrls: [{ type: String, required: true }],
    lastUpdated: { type: Date, required: true },
     bookings: [bookingSchema],
});

const Hotel = model<HotelType>("Hotel", hotelSchema);

export default Hotel;