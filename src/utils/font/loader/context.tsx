import { createContext, useContext } from 'react';

type FontCacheStruct = {
  hashKey: string;
  unflushedUrl: string;
  node: HTMLLinkElement;
};

interface FontContextInterface {
  cache: {
    [x: string]: FontCacheStruct;
  };
  updateCache: (o: FontCacheStruct) => void;
}

class FontContextImpl implements FontContextInterface {
  cache;
  updateCache(o: FontCacheStruct) {
    const staticCopy = { ...this.cache };
    this.cache = { ...staticCopy, [o.hashKey]: o };
  }
  constructor() {
    this.cache = {};
  }
  inspect() {
    return this.cache;
  }
}

export const FontContext = createContext<FontContextImpl>(
  new FontContextImpl()
);

export const useFontContext = () => useContext(FontContext);
