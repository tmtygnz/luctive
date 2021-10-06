import React, { createContext, useContext } from "react";
import { useCookies } from "react-cookie";

const userIDContext = createContext<any | null>(null);
const updateUserIDContext = createContext<any | null>(null);

export const UserProvider: React.FC = ({ children }) => {
  const [userID, setUserID, removeUserID] = useCookies(["userID"]);

  const updateUserID = (id: string) => {
    setUserID("userID", id);
  };

  return (
    <userIDContext.Provider value={userID}>
      <updateUserIDContext.Provider value={updateUserID}>
        {children}
      </updateUserIDContext.Provider>
    </userIDContext.Provider>
  );
};

export const useUserID = () => {
  return useContext(userIDContext);
};

export const useUpdateUserID = () => {
  return useContext(updateUserIDContext);
};
