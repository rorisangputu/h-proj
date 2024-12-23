import { Link } from "react-router-dom";
import * as apiClient from "../apiClient";
import { useQuery } from "react-query";
import { useAppContext } from "../contexts/AppContext";
import { BsBuilding, BsMap } from "react-icons/bs";
import { BiHotel, BiMoney, BiStar } from "react-icons/bi";

const MyHotels = () => {
  const { showToast } = useAppContext();
  const { data: hotelData } = useQuery("getMyHotels", apiClient.getMyHotels, {
    onError: () => {
      showToast({ message: "Couldn't get Hotels", type: "ERROR" });
    },
  });

  if (!hotelData) {
    return <span>No Hotels found</span>;
  }

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
      <div className="grid grid-cols-1 gap-8">
        {hotelData?.map((hotel) => (
          <div className="border rounded-lg p-8 gap-5 flex flex-col justify-between border-slate-300">
            <h2 className="text-2xl font-bold">{hotel.name}</h2>
            <div className="whitespace-pre-line line-clamp-1 ">
              {hotel.description}
            </div>
            <div className="grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-5 gap-2">
              <div className="border border-slate-300 rounded-sm p-3 flex items-center gap-2">
                <BsMap />
                {hotel.city}, {hotel.country}
              </div>
              <div className="border border-slate-300 rounded-sm p-3 flex items-center gap-2">
                <BsBuilding className="text-amber-900" />
                {hotel.type}
              </div>
              <div className="border border-slate-300 rounded-sm p-3 flex items-center gap-2">
                <BiMoney className="text-green-600" />R {hotel.pricePerNight} /
                per night
              </div>
              <div className="border border-slate-300 rounded-sm p-3 flex items-center gap-2">
                <BiHotel className="text-red-600" />
                {hotel.adultCount} adults, {hotel.childCount} children
              </div>
              <div className="border border-slate-300 rounded-sm p-3 flex items-center gap-2">
                <BiStar className="text-yellow-400" />
                {hotel.starRating}
              </div>
            </div>
            <span className="flex justify-end">
              <Link
                to={`/edit-hotel/${hotel._id}`}
                className="p-3 bg-blue-700 text-white font-bold hover:bg-blue-600"
              >
                View Details
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHotels;
