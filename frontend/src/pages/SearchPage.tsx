import { useQuery } from "react-query";
import { useSearchContext } from "../contexts/searchContext";
import * as apiClient from '../apiClient'

const SearchPage = () => {
  const search = useSearchContext();

  const { data: hotelData } = useQuery(["searchHotels", searchParms], () => {
    apiClient.searchHotels(searchParams);
  });

  return <div>SearchPage</div>;
};

export default SearchPage;
