import React from "react";
import { SignUp } from "../../components/SignUp";

const login = () => {
  return (
    <div className="flex items-center justify-start">
      <div className="w-6/12 bg-black h-screen flex items-center justify-center">
        <span className="text-8xl text-white font-bold">Luctive</span>
      </div>
      <div className="w-6/12 bg-white h-screen flex items-center justify-center">
        <SignUp />
      </div>
    </div>
  );
};

export default login;
