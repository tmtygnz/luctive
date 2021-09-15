import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { Menu, MenuItem } from "../components/ui/Menu";

const Home: NextPage = () => {
  return (
    <div className={`${styles.container} bg-black h-screen text-white`}>
			<Menu label="Test">
				<MenuItem>Dropdown Item</MenuItem>
				<MenuItem>Dropdown Item</MenuItem>
				<MenuItem>Dropdown Item</MenuItem>
				<MenuItem>Dropdown Item</MenuItem>
			</Menu>
    </div>
  );
};

export default Home;
