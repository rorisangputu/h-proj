import { Link } from "react-router-dom";
import * as apiClient from "../apiClient";
import { useQuery } from "react-query";
import { useAppContext } from "../contexts/AppContext";

const MyHotels = () => {
  const { showToast } = useAppContext();
  const { data: hotelData } = useQuery("getMyHotels", apiClient.getMyHotels, {
    onError: () => {
      showToast({ message: "Couldn't get Hotels", type: "ERROR" });
    },
  });
  return (
    <div className="space-y-5">
      <span className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Hotels</h1>
        <Link
          to={"/add-hotel"}
          className="p-3 bg-blue-700 text-white font-bold text-xl hover:bg-blue-600"
        >
          Add Hotel
        </Link>
      </span>
    </div>
  );
};

export default MyHotels;
