import { useQuery } from "react-query";
import * as apiClient from "../apiClient";
import BookingForm from "../forms/BookingForm/BookingForm";
import { useSearchContext } from "../contexts/searchContext";

const Booking = () => {
    const search = useSearchContext();
  const { data: currentUser } = useQuery(
    "fetchCurrentUser",
    apiClient.fetchCurrentUser
  );

  return (
    <div className="grid md:grid-cols-[1fr_2fr] gap-5">
      <div className="bg-green-200 uppercase">Booking Details Summary</div>
      {currentUser && <BookingForm currentUser={currentUser} />}
    </div>
  );
};

export default Booking;
