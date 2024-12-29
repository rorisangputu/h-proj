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
    <div className="border p-5 flex flex-col gap-3 h-fit">
      <h2 className="text-2xl font-bold">Your Booking Details</h2>
      <div className="flex flex-col border-b py-3">
        <p className="font-light">Location:</p>
        <span className="font-semibold">{`${hotel.name}, ${hotel.city}, ${hotel.country}`}</span>
      </div>
      <div className="border-b py-3 grid grid-cols-2">
        <div>
          <p className="font-light">Check In:</p>
          <span className="font-semibold">{checkIn.toDateString()}</span>
        </div>
        <div>
          <p className="font-light">Check Out:</p>
          <span className="font-semibold">{checkOut.toDateString()}</span>
        </div>
      </div>
      <div className="flex flex-col border-b py-3">
        <p className="font-light">Total length of stay:</p>
        <span className="font-semibold">{numNights} night</span>
      </div>
      <div className="flex flex-col  py-3">
        <p className="font-light">Guest:</p>
        <span className="font-semibold">
          {adultCount} adults & {childCount} children
        </span>
      </div>
    </div>
  );
};

export default BookingDetailSummary;
