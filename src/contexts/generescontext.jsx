import { createContext, useState } from 'react';

const GenresContext = createContext();

const GenresProvider = ({ children }) => {
  const [genres, setgenres] = useState(null);

  return (
    <GenresContext.Provider value={{ genres, setgenres}}>
      {children}
    </GenresContext.Provider>
  );
};

export { GenresProvider, GenresContext };
