import { HotelType } from "../../../backend/src/shared/types";

type Props = {
  checkIn: Date;
  checkOut: Date;
  adultCount: number;
  childCount: number;
  hotel: HotelType;
  numNights: number;
};

const BookingDetailSummary = ({
  checkIn,
  checkOut,
  childCount,
  adultCount,
  hotel,
  numNights,
}: Props) => {
  return (
    <div className="border p-3 flex flex-col gap-3">
      <h2 className="text-2xl font-bold">Your Booking Details</h2>
      <div className="flex flex-col border-b py-3">
        <p className="font-light">Location:</p>
        <h3 className="font-semibold">{hotel.name}</h3>
      </div>
      <div className="border-b py-3 grid grid-cols-2">
        <div>
          <p className="font-light">Check In:</p>
          <h3 className="font-semibold">{checkIn.toISOString()}</h3>
        </div>
        <div>
          <p className="font-light">Check Out:</p>
          <h3 className="font-semibold">{checkOut.toISOString()}</h3>
        </div>
      </div>
      <div className="flex flex-col border-b py-3">
        <p className="font-light">Total length of stay:</p>
        <h3 className="font-semibold">{numNights} night</h3>
      </div>
      <div className="flex flex-col  py-3">
        <p className="font-light">Guest:</p>
        <h3 className="font-semibold">
          {adultCount} adults & {childCount} children
        </h3>
      </div>
    </div>
  );
};

export default BookingDetailSummary;
