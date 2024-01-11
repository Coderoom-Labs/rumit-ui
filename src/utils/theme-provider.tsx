import React from "react";
import { DesignToken } from "../tokens/base-token";

interface ThemeProviderProps {
  token: DesignToken;
  children: React.ReactNode;
}

export const ThemeContext = React.createContext<DesignToken>({});

const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  return (
    <ThemeContext.Provider value={props.token}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
