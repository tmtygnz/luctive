import { initializeApp } from "@firebase/app";
import {
	FacebookAuthProvider,
	getAuth, getRedirectResult, GoogleAuthProvider,
	signInWithRedirect
} from "@firebase/auth";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/Button";

export type SignUpProps = {
  fauth: string;
};

export const SignUp: React.FC<SignUpProps> = ({ fauth }) => {
  const app = initializeApp(JSON.parse(fauth));
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const auth = getAuth();

  const openGoogle = () => {
    signInWithRedirect(auth, googleProvider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const openFacebook = () => {
    signInWithRedirect(auth, facebookProvider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err);
      });
  };

	getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result!);
    const token = credential?.accessToken;

    // The signed-in user info.
    const user = result?.user;
		console.log(user);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

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
          onClick={() => openFacebook()}
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
