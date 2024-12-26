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

  const { data: hotelData } = useQuery(["searchHotels", searchParms], () => {
    apiClient.searchHotels(searchParams);
  });

  return <div>SearchPage</div>;
};

export default SearchPage;
