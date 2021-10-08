import React, { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import io, { Socket } from "socket.io-client";
import { ITodo } from "../interfaces/ITodo";
import { IUser } from "../interfaces/IUser";

const userIDContext = createContext<any | null>(null);
const updateUserIDContext = createContext<any | null>(null);
const isLoggedInContext = createContext<any | null>(null);
const todoListContext = createContext<ITodo[]>([]);
const titleContext = createContext<string>("");

export const UserProvider: React.FC = ({ children }) => {
  const [userID, setUserID, removeUserID] = useCookies(["userID"]);
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [title, setTitle] = useState<string>("");
  const [socket, setSocket] = useState<Socket>();

  const updateUserID = (id: string) => {
    setUserID("userID", id, { maxAge: 1000, path: "/" });
  };

  const isLoggedIn = () => {
    console.log(userID.userID);
    if (userID.userID) {
      return true;
    } else {
      return false;
    }
  };

  useEffect((): any => {
    let nSocket = io("localhost:5467", {
      rejectUnauthorized: false,
    });
    setSocket(nSocket);
    return () => nSocket.close();
  }, [setSocket]);

  useEffect(() => {
    socket?.emit("join_room", userID.userID);
    socket?.on("dbUpdate", (snapshot: IUser) => {
      setTodoList(snapshot.spaces[0].spaceTodo);
      setTitle(snapshot.spaces[0].spaceName);
    });
  }, [socket]);

  return (
    <userIDContext.Provider value={userID}>
      <updateUserIDContext.Provider value={updateUserID}>
        <todoListContext.Provider value={todoList}>
          <titleContext.Provider value={title}>
            <isLoggedInContext.Provider value={isLoggedIn}>
              {children}
            </isLoggedInContext.Provider>
          </titleContext.Provider>
        </todoListContext.Provider>
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

export const useTodoList = () => {
  return useContext(todoListContext);
};

export const useTitle = () => {
  return useContext(titleContext);
};

export const useIsLoggedIn = () => {
  return useContext(isLoggedInContext);
};
