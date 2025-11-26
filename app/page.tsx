"use client";
import styles from "./page.module.scss";
import CreateItem from "@/app/components/ui/ModalContainer/Popup/create_item/create";

function Page(){
  return (
      <div className={styles.landing}>
        <CreateItem></CreateItem>
      </div>
  );
}

export default Page;