import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../apiClient";

const EditHotel = () => {
  const { hotelId } = useParams();

  const { data: hotel } = useQuery(
    "getMyHotel",
    () => apiClient.getMyHotel(hotelId || ""),
    {
      enabled: !!hotelId,
    }
  );
  return <div>EditHotel</div>;
};

export default EditHotel;
