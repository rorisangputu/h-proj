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
  return <div>BookingDetailSummary</div>;
};

export default BookingDetailSummary;
