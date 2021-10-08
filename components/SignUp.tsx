import React from "react";
import { useUpdateSigningUpContext } from "../context/SignupContext";
import { Button } from "./ui/Button";

export const SignUp = () => {
  const updateIsSigningUp = useUpdateSigningUpContext();
  return (
    <div className="p-5">
      <div className="header">
        <div className="text-2xl font-bold">SIGN UP</div>
        <div className="font-light mt-3 w-72">
          By Sining up you are agree with out Privacy Policy and Terms and
          Serivce
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
        Already have an account?{" "}
        <span
          onClick={() => updateIsSigningUp(false)}
          className="cursor-pointer select-none"
        >
          Login.
        </span>
      </div>
    </div>
  );
};
