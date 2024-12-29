import { useQuery } from "react-query";
import * as apiClient from "../apiClient";
import BookingForm from "../forms/BookingForm/BookingForm";

const Booking = () => {
  const { data: currentUser } = useQuery(
    "fetchCurrentUser",
    apiClient.fetchCurrentUser
  );

  console.log(currentUser?.email);
  return (
    <div className="grid md:grid-cols-[1fr_2fr]">
      <div className="bg-green-200 uppercase">Booking Details Summary</div>
      <BookingForm currentUser={currentUser} />
    </div>
  );
};

export default Booking;
