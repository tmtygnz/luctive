import React, { useEffect, useState } from "react";
import { AiFillCheckSquare, AiOutlineMore } from "react-icons/ai";
import { BiSort } from "react-icons/bi";
import io, { Socket } from "socket.io-client";
import { useUserID } from "../context/UserContext";
import { ITodo } from "../interfaces/ITodo";
import { IUser } from "../interfaces/IUser";
import { Button } from "./ui/Button";
import { Menu, MenuItem } from "./ui/Menu";

export const TodoView = () => {
  let user = useUserID();

  const [TodoList, setTodoList] = useState<ITodo[]>([]);
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    let nSocket = io("localhost:5467", {
      rejectUnauthorized: false,
    });
    setSocket(nSocket);
    console.log("test??????");
    return () => nSocket.close();
  }, [setSocket]);

  useEffect(() => {
    socket?.emit("join_room", user.userID);
    socket?.on("dbUpdate", (snapshot: IUser) => {
      setTodoList(snapshot.spaces[0].spaceTodo);
    });
  }, [socket]);

  return (
    <div className="w-220 m-10">
      <div className="flex justify-between">
        <div className="Title">
          <span className="text-2xl">Urgent</span>
          <span className="text-sm ml-2 text-gray-400">Saturday 2 October</span>
        </div>
        <div className="Tools ">
          <Menu label="Sort" Icon={<BiSort />} Type="normal">
            <MenuItem>Sort by priority</MenuItem>
            <MenuItem>Sort by alphabetically</MenuItem>
            <MenuItem>Sort by due date</MenuItem>
          </Menu>
        </div>
      </div>
      <div className="Todos mt-5">
        <div>
          {TodoList.map((x) => (
            <TodoItem>{x.todoTitle}</TodoItem>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <Button onClick={() => socket?.emit("openAlert", user.userID)}>
          + Add To-Do
        </Button>
      </div>
    </div>
  );
};

export const TodoItem: React.FC = ({ children }) => {
  return (
    <div className="border-t border-b flex items-center p-5 cursor-pointer justify-between">
      <div className="flex items-center">
        <Button className="mr-5" Type="normal">
          <AiFillCheckSquare />
        </Button>
        <div className="todoName">
          <div>{children}</div>
          <div className="text-gray-500 text-xs">September 3</div>
        </div>
      </div>

      <div>
        <Button>
          <AiOutlineMore />
        </Button>
      </div>
    </div>
  );
};
