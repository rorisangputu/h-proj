import { useQuery } from "react-query";
import { useSearchContext } from "../contexts/searchContext";
import * as apiClient from '../apiClient'

const SearchPage = () => {
  const search = useSearchContext();

  const searchParams = {
    destination: search.destination,
    checkIn: search.checkIn.toISOString(),
    checkOut: search.checkOut.toISOString(),
    adultCount: search.adultCount.toString(),
    childCount: search.childCount.toString(),
  }

  const { data: hotelData } = useQuery(["searchHotels", searchParms], () => {
    apiClient.searchHotels(searchParams);
  });

  return <div>SearchPage</div>;
};

export default SearchPage;
