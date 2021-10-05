import React, { createContext, useContext } from "react";
import Cookies from "universal-cookie";

new Cookies();

const cookieContext = createContext<Cookies | null>(null);

export const CookieProvider: React.FC = ({ children }) => {
  const cookie = new Cookies();
  return (
    <cookieContext.Provider value={cookie}>{children}</cookieContext.Provider>
  );
};

export const useCookie = () => {
  return useContext(cookieContext);
};
