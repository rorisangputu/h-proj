import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../apiClient";
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm";

const EditHotel = () => {
  const { hotelId } = useParams();

  const { data: hotel } = useQuery(
    "getMyHotel",
    () => apiClient.getMyHotel(hotelId || ""),
    {
      enabled: !!hotelId,
    }
  );

  return (
    <div>
      <ManageHotelForm hotel={hotel} />
    </div>
  );
};

export default EditHotel;
