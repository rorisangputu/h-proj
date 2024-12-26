import { useQuery } from "react-query";
import { useSearchContext } from "../contexts/searchContext";
import * as apiClient from "../apiClient";
import { useState } from "react";

const SearchPage = () => {
  const search = useSearchContext();
  const [page, setPage] = useState<number>(1);

  const searchParams = {
    destination: search.destination,
    checkIn: search.checkIn.toISOString(),
    checkOut: search.checkOut.toISOString(),
    adultCount: search.adultCount.toString(),
    childCount: search.childCount.toString(),
    page: page.toString(),
  };

  // Specify the type of data returned by the query
  const { data: hotelData } = useQuery(
    ["searchHotels", searchParams],
    () => apiClient.searchHotels(searchParams) // Ensure this returns a promise
  );
  // console.log(data);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-4">
      {/* FILTER BAR */}
      <div className="rounded-lg border border-slate-300 p-5 h-fit sticky top-10">
        <div className="space-y-5">
          <h3 className="text-lg font-semibold border-b border-slate-300 pb-5">
            Filter by:
          </h3>
          {/* FILTERS */}
        </div>
      </div>

      {/* SEARCH RESULTS */}
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold">
            {hotelData?.pagination.total} Hotels found
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
