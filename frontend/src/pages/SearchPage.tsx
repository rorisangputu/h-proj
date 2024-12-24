import React from "react";
import { useSearchContext } from "../contexts/searchContext";

const SearchPage = () => {
  const search = useSearchContext();
    console.log(search);
    
  return <div>SearchPage</div>;
};

export default SearchPage;
