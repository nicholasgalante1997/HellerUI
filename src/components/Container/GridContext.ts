import React from 'react';

const getDefaultContext = () => {
  return 12;
};

export const defaultContext = {
  rows: getDefaultContext()
};

const GridContext = React.createContext(defaultContext);

export const GridProvider = GridContext.Provider;
export const GridConsumer = GridContext.Consumer;

export const useGridContext = () => React.useContext(GridContext);
