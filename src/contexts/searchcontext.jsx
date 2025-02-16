import { createContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchInput, setsearchInput] = useState("");
  const [searchdata, setsearchdata] = useState();

  const value = {searchInput,setsearchInput,searchdata,setsearchdata}; 
  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, SearchContext };



