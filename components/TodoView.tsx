import React from "react";
import { AiFillCheckSquare, AiOutlineMore } from "react-icons/ai";
import { BiSort } from "react-icons/bi";
import { ITodo } from "../interfaces/ITodo";
import { Button } from "./ui/Button";
import { Menu, MenuItem } from "./ui/Menu";

export const TodoView = () => {
  let TodoList: Array<ITodo> = [
    { IsDone: false, Title: "Test", Duedate: "September 3" },
    { IsDone: false, Title: "Test1", Duedate: "September 4" },
    { IsDone: false, Title: "Test2", Duedate: "September 5" },
    { IsDone: false, Title: "Test3", Duedate: "September 6" },
    { IsDone: false, Title: "Test4", Duedate: "September 7" },
    { IsDone: false, Title: "Test5", Duedate: "September 8" },
    { IsDone: false, Title: "Test6", Duedate: "September 1" },
  ];

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
          {TodoList.map((x, i) => (
            <TodoItem key={i}>{x.Title}</TodoItem>
          ))}
        </div>
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
