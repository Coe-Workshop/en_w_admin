import { ReactNode } from "react";
import { ModalContainerProps } from "./modalContainer.types";
import styles from "./modal.module.scss";

const ModalContainer = ({
  opened,
  onClose,
  children,
  margin,
}: ModalContainerProps) => {
  if (opened) {
    return (
      <div
        style={{ "--margin-content": margin } as React.CSSProperties}
        className={styles.modalContainer}
      >
        <div
          className={styles.background}
          onClick={() => {
            onClose();
          }}
        ></div>
        {children && <div className={styles.content}>{children}</div>}
      </div>
    );
  } else {
    return;
  }
};

export default ModalContainer;
