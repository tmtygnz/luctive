import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button } from "../components/ui/Button";
import { useState } from "react";
import { Menu, MenuItem } from "../components/ui/Menu";
import { Spinner } from "../components/ui/Spinner";
import { Modal } from "../components/ui/Modal";

const Home: NextPage = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={`${styles.container}`}>
      <Button className="mt-3 ml-3" onClick={() => setOpen(!isOpen)}>
        Open Modal Window
      </Button>
      <Modal isOpen={isOpen}></Modal>
    </div>
  );
};

export default Home;
