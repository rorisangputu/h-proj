import { useQuery } from "react-query";
import * as apiClient from "../apiClient";

const Booking = () => {
  const { data: currentUser } = useQuery(
    "fetchCurrentUser",
    apiClient.fetchCurrentUser
  );
    
  console.log(currentUser?.email);
  return <div>Booking</div>;
};

export default Booking;
