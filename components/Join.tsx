import React from "react";
import { useSigningUp } from "../context/SignupContext";
import { Login } from "./Login";
import { SignUp } from "./SignUp";

export const Join: React.FC = () => {
  const SigningUp = useSigningUp();
  return (
    <div className="flex items-center justify-start">
      <div className="w-6/12 bg-green-100 h-screen"></div>
      <div className="w-6/12 bg-white h-screen flex items-center justify-center">
        {SigningUp ? <SignUp /> : <Login />}
      </div>
    </div>
  );
};
