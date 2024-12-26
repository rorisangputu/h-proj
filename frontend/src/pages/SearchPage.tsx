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

  const { data: hotelData } = useQuery(["searchHotels", searchParams], () => {
    apiClient.searchHotels(searchParams);
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-4">
      <div className="rounded-lg border border-slate-300 p-5 h-fit sticky top-10">
        
      </div>
    </div>
  );
};

export default SearchPage;
