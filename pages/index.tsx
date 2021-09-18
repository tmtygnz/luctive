import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from "../components/ui/Button";
import { useState } from "react";
import { Menu, MenuItem } from "../components/ui/Menu";
import { Spinner } from "../components/ui/Spinner";

const Home: NextPage = () => {
  return (
    <div className={`${styles.container}`}>
      <div className="m-20">
				<Spinner/>
      </div>
    </div>
  );
};

export default Home;
