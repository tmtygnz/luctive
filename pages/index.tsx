import type { NextPage } from "next";
import { Header } from "../components/Header";
import { Drawer } from "../components/ui/Drawer";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={`${styles.container}`}>
			<Drawer isOpen={true} label="Basic Drawer">
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
				<p>test</p>
			</Drawer>
    </div>
  );
};

export default Home;
