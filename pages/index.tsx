import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {Button} from "../components/ui/Button"
import { useState } from "react";
import { Menu, MenuItem } from "../components/ui/Menu";

const Home: NextPage = () => {
  return (
    <div className={`${styles.container} bg-white h-screen text-white`}>
			<Button className="m-6">Hello</Button>
    </div>
  );
};

export default Home;
