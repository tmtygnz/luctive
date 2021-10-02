import React from "react";
import { AiFillCheckSquare, AiOutlineMore } from "react-icons/ai";
import { BiSort } from "react-icons/bi";
import { Button } from "./ui/Button";
import { Menu, MenuItem } from "./ui/Menu";

export const TodoView = () => {
  return (
    <div className="w-220 m-10">
      <div className="flex justify-between">
        <div className="Title">
          <span className="text-2xl">Urgent</span>
          <span className="text-sm ml-2 text-gray-400">Saturday 2 October</span>
        </div>
        <div className="Tools">
          <Menu label="Sort" Icon={<BiSort />} Type="normal">
            <MenuItem>Sort by priority</MenuItem>
            <MenuItem>Sort by alphabetically</MenuItem>
            <MenuItem>Sort by due date</MenuItem>
          </Menu>
        </div>
      </div>
      <div className="Todos mt-5">
        <ul>
          <TodoItem></TodoItem>
          <TodoItem></TodoItem>
          <TodoItem></TodoItem>
          <TodoItem></TodoItem>
        </ul>
      </div>
    </div>
  );
};

export const TodoItem: React.FC = ({ children }) => {
  return (
    <li className="border-t border-b flex items-center p-5 cursor-pointer justify-between">
      <div className="flex items-center">
        <Button className="mr-5" Type="normal">
          <AiFillCheckSquare />
        </Button>
        <div className="todoName">
          <div>Create Account</div>
          <div className="text-gray-500 text-xs">September 3</div>
        </div>
      </div>

      <div>
        <Button>
          <AiOutlineMore />
        </Button>
      </div>
    </li>
  );
};
