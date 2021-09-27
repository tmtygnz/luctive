import type { NextPage } from "next";
import { Header } from "../components/Header";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={`${styles.container}`}>
			<Header/>
    </div>
  );
};

export default Home;
