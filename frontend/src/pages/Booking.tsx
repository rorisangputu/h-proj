import { useQuery } from "react-query";
import * as apiClient from "../apiClient";
import BookingForm from "../forms/BookingForm/BookingForm";
import { useSearchContext } from "../contexts/searchContext";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Booking = () => {
  const search = useSearchContext();
  const { hotelId } = useParams();

  const [numNights, setNumNights] = useState<number>(0);
  useEffect(() => {
    if (search.checkIn && search.checkOut) {
      const nights =
        Math.abs(search.checkOut.getTime() - search.checkIn.getTime()) /
        (1000 * 60 * 60 * 24);

      setNumNights(Math.ceil(nights));
    }
  }, [search.checkIn, search.checkOut]);

  const { data: hotel } = useQuery(
    "fetchHotelById",
    () => apiClient.fetchHotelById(hotelId as string),
    {
      enabled: !!hotelId,
    }
  );
  const { data: currentUser } = useQuery(
    "fetchCurrentUser",
    apiClient.fetchCurrentUser
  );

  return (
    <div className="grid md:grid-cols-[1fr_2fr] gap-5">
      <BookingDetailSummary
        checkIn={search.checkIn}
        checkOut={search.checkOut}
        adultCount={search.adultCount}
        childCount={search.childCount}
        numNights={numNights}
        hotel={hotel}
      />
      {currentUser && <BookingForm currentUser={currentUser} />}
    </div>
  );
};

export default Booking;
