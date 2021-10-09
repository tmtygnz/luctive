import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { Button } from "../components/ui/Button";
import { useSigningUp } from "../context/SignupContext";
import { useIsLoggedIn } from "../context/UserContext";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const isLoggedin = useIsLoggedIn();
  const SigningUp = useSigningUp();
  console.log(isLoggedin());

  return (
    <div className={`${styles.container} overflow-hidden`}>
      <Button>
        <Link href="/users/signup">test</Link>
      </Button>
    </div>
  );
};

export default Home;
