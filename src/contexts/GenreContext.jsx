import { createContext, useState } from 'react';

const GenresContext = createContext();

const GenresProvider = ({ children }) => {
  const [genres, setGenres] = useState(null);

  return (
    <GenresContext.Provider value={{ genres, setGenres}}>
      {children}
    </GenresContext.Provider>
  );
};

export { GenresProvider, GenresContext };
