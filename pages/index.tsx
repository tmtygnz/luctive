import Link from "next/link";
import React from "react";
import { Button } from "../components/ui/Button";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={`${styles.container} overflow-hidden`}>
      <Button>
        <Link href="/users/signup">test</Link>
      </Button>
    </div>
  );
};

export default Home;
