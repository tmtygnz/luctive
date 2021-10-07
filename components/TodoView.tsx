import React from "react";
import { AiFillCheckSquare, AiOutlineMore } from "react-icons/ai";
import { BiSort } from "react-icons/bi";
import { useTitle, useTodoList } from "../context/UserContext";
import { Button } from "./ui/Button";
import { Menu, MenuItem } from "./ui/Menu";

export const TodoView = () => {
  const title = useTitle();
  const todoList = useTodoList();

  return (
    <div className="w-220 m-10">
      <div className="flex justify-between">
        <div className="Title">
          <span className="text-2xl">{title}</span>
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
          {todoList.map((x, i) => (
            <TodoItem key={i}>{x.todoTitle}</TodoItem>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <Button>+ Add To-Do</Button>
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
        <Menu Icon={<AiOutlineMore />}>
          <MenuItem>Edit Task</MenuItem>
          <MenuItem>Delete Task</MenuItem>
        </Menu>
      </div>
    </div>
  );
};
