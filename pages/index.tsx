import type { NextPage } from "next";
import React from "react";
import { Dashboard } from "../components/Dashboard";
import { Join } from "../components/Join";
import { useSigningUp } from "../context/SignupContext";
import { useIsLoggedIn } from "../context/UserContext";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const isLoggedin = useIsLoggedIn();
  const SigningUp = useSigningUp();
  console.log(isLoggedin());

  return (
    <div className={`${styles.container} overflow-hidden`}>
      {isLoggedin() ? <Dashboard /> : <Join />}
    </div>
  );
};

export default Home;
