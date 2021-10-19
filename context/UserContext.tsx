import React, { createContext, useContext, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import { ITodo } from "../interfaces/ITodo";
import { IUser } from "../interfaces/IUser";
import { useUserID } from "./AuthContext";

const todoListContext = createContext<ITodo[]>([]);
const titleContext = createContext<string>("");

export const UserProvider: React.FC = ({ children }) => {
	const {userID, updateUserID} = useUserID();
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [title, setTitle] = useState<string>("");
  const [socket, setSocket] = useState<Socket>();

  useEffect((): any => {
    let nSocket = io("localhost:5467", {
      rejectUnauthorized: false,
    });
    setSocket(nSocket);
    return () => nSocket.close();
  }, [setSocket]);

  useEffect(() => {
    socket?.emit("join_room", userID);
    socket?.on("dbUpdate", (snapshot: IUser) => {
      setTodoList(snapshot.spaces[0].spaceTodo);
      setTitle(snapshot.spaces[0].spaceName);
    });
  }, [socket]);

  return (
    <todoListContext.Provider value={todoList}>
      <titleContext.Provider value={title}>{children}</titleContext.Provider>
    </todoListContext.Provider>
  );
};

export const useTodoList = () => {
  return useContext(todoListContext);
};

export const useTitle = () => {
  return useContext(titleContext);
};
