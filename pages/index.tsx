import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Menu } from "../components/ui/Menu/Menu";
import { MenuItem } from "../components/ui/Menu/MenuItem";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { MenuButton } from "../components/ui/Menu/MenuButton";

const Home: NextPage = () => {
  return (
    <div className={`${styles.container} bg-black h-screen text-white`}>
      <MenuButton label="Hello Button">
        <Menu>
          <MenuItem>Another Test</MenuItem>
        </Menu>
      </MenuButton>
    </div>
  );
};

export default Home;
