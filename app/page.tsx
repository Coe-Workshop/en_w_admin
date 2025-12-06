import { TableTransaction } from "./components/ui/tableTransaction/tableTransaction";
import styles from "./page.module.scss";
import Navbar from "@/app/components/Navbar/Navbar";
function page() {
  return (
    <div className={styles.landing}>
      <TableTransaction></TableTransaction>
    </div>
  );
}

export default page;
