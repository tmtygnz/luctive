import React, { createContext, useContext, useState } from "react";

const isSigningUpContext = createContext<boolean | null>(null);
const updateSigningUpContext = createContext<any | null>(null);

export const SignupProvider: React.FC = ({ children }) => {
  const [isSigningUp, setSigningUp] = useState(true);
  return (
    <isSigningUpContext.Provider value={isSigningUp}>
      <updateSigningUpContext.Provider value={setSigningUp}>
        {children}
      </updateSigningUpContext.Provider>
    </isSigningUpContext.Provider>
  );
};

export const useSigningUp = () => {
  return useContext(isSigningUpContext);
};

export const useUpdateSigningUpContext = () => {
  return useContext(updateSigningUpContext);
};
