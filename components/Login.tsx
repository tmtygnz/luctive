import Head from 'next/head';
import Link from "next/link";
import React from "react";
import { Button } from "./ui/Button";

export const Login = () => {
  return (
    <div className="p-5 border border-black">
			<Head>
				<title>Login</title>
			</Head>
      <div className="header">
        <div className="text-2xl font-bold">Login</div>
        <div className="font-light mt-3 w-72">
          Continue your work by Logging back in.
        </div>
      </div>
      <div className="mt-3 flex justify-center flex-col">
        <Button Type="normal" className="w-full bg-red-600">
          Google
        </Button>
        <Button Type="normal" className="w-full mt-2 bg-blue-600">
          Facebook
        </Button>
      </div>
      <div className="mt-3 flex items-center">
        <hr className="w-full border-black" />
        <span className="mx-2 text-sm">or</span>
        <hr className="w-full border-black" />
      </div>
      <div className="font-light mt-3 w-72">
        <Button Type="outline" className="w-full">
          <Link href="/users/signup">Sign Up</Link>
        </Button>
      </div>
    </div>
  );
};
