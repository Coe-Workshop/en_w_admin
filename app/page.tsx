import styles from "./page.module.scss";
import Navbar from "@/app/components/Navbar/Navbar";

function page(){
  return (
      <div className={styles.landing}>
        <Navbar></Navbar>
      </div>
  );
}

export default page;