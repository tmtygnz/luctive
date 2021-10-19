import { initializeApp } from "@firebase/app";
import {
	FacebookAuthProvider,
	getAuth,
	GoogleAuthProvider,
	signInWithPopup
} from "@firebase/auth";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useUserID } from "../context/AuthContext";
import { Button } from "./ui/Button";

export type SignUpProps = {
  fauth: string;
};

export const SignUp: React.FC<SignUpProps> = ({ fauth }) => {
  const app = initializeApp(JSON.parse(fauth));
	const router = useRouter();
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const auth = getAuth();
  const { userID, updateUserID } = useUserID();

  const openGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        updateUserID(res.user.uid);
				setTimeout(() => {
					router.push("/")
				}, 1000);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const openFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div className="p-5">
      <Head>
        <title>Sign up</title>
      </Head>
      <div className="header">
        <div className="text-2xl font-bold">SIGN UP</div>
        <div className="font-light mt-3 w-72">
          By Sining up you are agree with out Privacy Policy and Terms and
          Serivce
        </div>
      </div>
      <div className="mt-3 flex justify-center flex-col">
        <Button
          Type="normal"
          className="w-full bg-red-600"
          onClick={() => openGoogle()}
        >
          Google
        </Button>
        <Button
          Type="normal"
          className="w-full mt-2 bg-blue-600"
          onClick={() => console.log(userID)}
        >
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
          <Link href="/users/login">Login</Link>
        </Button>
      </div>
    </div>
  );
};
