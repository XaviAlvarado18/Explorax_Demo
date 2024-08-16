import React, { createContext, useContext, useState } from 'react';

const CurrentProgressContext = createContext();

export const useCurrentProgress = () => useContext(CurrentProgressContext);

export const CurrentProgressProvider = ({ children }) => {
  const [currentProgress, setCurrentProgress] = useState(1);

  return (
    <CurrentProgressContext.Provider value={{ currentProgress, setCurrentProgress }}>
      {children}
    </CurrentProgressContext.Provider>
  );
};