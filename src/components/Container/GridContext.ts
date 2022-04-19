import React from 'react';

const getDefaultContext = () => {
  if (typeof window === 'undefined') return 12;
  if (window && window.screen.width < 480) return 6;
  return 12;
};

export const defaultContext = {
  rows: getDefaultContext()
};

const GridContext = React.createContext(defaultContext);

export const GridProvider = GridContext.Provider;
export const GridConsumer = GridContext.Consumer;

export const useGridContext = () => React.useContext(GridContext);
