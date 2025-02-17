import { createContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchData, setSearchData] = useState();

  const value = {searchInput,setSearchInput,searchData,setSearchData}; 
  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, SearchContext };



