import type { NextPage } from "next";
import { Header } from "../components/Header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  console.log();

  return (
    <div className={`${styles.container} `}>
      <Header></Header>
    </div>
  );
};

export default Home;
