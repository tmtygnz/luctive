import Link from "next/link";
import React from "react";
import { Dashboard } from "../components/Dashboard";
import { Button } from "../components/ui/Button";
import { useUserID } from "../context/AuthContext";
import styles from "../styles/Home.module.css";

const Home: React.FC = () => {
  const { userID, updateUserID } = useUserID();
  return (
    <div className={`${styles.container} overflow-hidden`}>
      {userID ? (
        <Dashboard />
      ) : (
        <Button>
          <Link href="/users/signup">test</Link>
        </Button>
      )}
    </div>
  );
};

export default Home;
