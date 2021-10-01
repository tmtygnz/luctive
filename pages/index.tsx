import type { NextPage } from "next";
import { Button } from "../components/ui/Button";
import styles from "../styles/Home.module.css";
const Home: NextPage = () => {
  return (
    <div className={`${styles.container}`}>
      <Button>Button</Button>
    </div>
  );
};

export default Home;
