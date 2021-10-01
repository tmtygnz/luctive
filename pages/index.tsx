import type { NextPage } from "next";
import { RiSearchLine } from "react-icons/ri";
import { Input } from "../components/ui/Input";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  console.log();

  return (
    <div className={`${styles.container} `}>
      <div className="m-10">
        <Input
          placeholder="Search for items, brands, or styles"
          className="w-80"
          icon={<RiSearchLine />}
        ></Input>
      </div>
    </div>
  );
};

export default Home;
