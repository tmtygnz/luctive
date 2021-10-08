import React from "react";
import { useUpdateSigningUpContext } from "../context/SignupContext";
import { Button } from "./ui/Button";

export const Login = () => {
  const updateIsSigningUp = useUpdateSigningUpContext();
  return (
    <div className="p-5">
      <div className="header">
        <div className="text-2xl font-bold">LOGIN</div>
        <div className="font-light mt-3 w-72">
          Continue your work by Logging back in.
        </div>
      </div>
      <div className="mt-3 flex justify-center flex-col">
        <Button Type="outline" className="w-full">
          Google
        </Button>
        <Button Type="outline" className="w-full mt-2">
          Facebook
        </Button>
      </div>
      <div className="font-light mt-3 w-72">
        Dont have an account?{" "}
        <span
          onClick={() => updateIsSigningUp(true)}
          className="cursor-pointer select-none"
        >
          SignUp
        </span>
        .
      </div>
    </div>
  );
};
