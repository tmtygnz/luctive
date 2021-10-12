import React from "react";
import { SignUp } from "../../components/SignUp";

export type HomeProps = {
  fauth: string;
};

const login: React.FC<HomeProps> = ({ fauth }) => {
  const auth: string = Buffer.from(fauth, "base64").toString("binary");
  return (
    <div className="flex items-center justify-start">
      <div className="w-6/12 bg-black h-screen flex items-center justify-center">
        <span className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600">
          Luctive
        </span>
      </div>
      <div className="w-6/12 bg-white h-screen flex items-center justify-center">
        <SignUp fauth={auth}/>
      </div>
    </div>
  );
};

export default login;

export const getServerSideProps = async () => {
  return {
    props: {
      fauth: process.env.FIREBASEAUTH,
    },
  };
};
