import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import * as apiClient from "../apiClient";
import { AiFillStar } from "react-icons/ai";

const Details = () => {
  const { hotelId } = useParams();
  const { data: hotel } = useQuery(
    "fetchHotelById",
    () => apiClient.fetchHotelById(hotelId as string),
    {
      enabled: !!hotelId, //dont call api if hotelId doesnt exist
    }
  );
  if (!hotel) {
    return <></>;
  }
  return (
    <div className="space-y-6">
      <div>
        <span className="flex">
          {Array.from({ length: hotel.starRating }).map(() => (
            <AiFillStar className="fill-yellow-400" />
          ))}
        </span>
        <h1 className="text-3xl font-bold">{hotel.name}</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {hotel.imageUrls.map((image) => (
          <div key={image} className="h-[300px]">
            <img
              src={image}
              alt={hotel.name}
              className="rounded-md w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
        {hotel.facilities.map((facility) => (
          <div className="border p-3 text-center border-slate-300 rounded-md">
            {facility}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
