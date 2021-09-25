/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React, { createContext } from 'react';

export enum ThemePkgs {
  twilight = 'twilight'
}

interface ThemeContextType {
  theme: ThemePkgs;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: ThemePkgs.twilight,
});

export default ThemeContext;
