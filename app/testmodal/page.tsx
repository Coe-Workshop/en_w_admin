"use client";

import React, { useEffect } from "react";
import useDisclosure from "../hook/useDisclosure";
import ModalContainer from "../components/ModalContainer/modalContainer";
import CreateItem from "../components/ui/create_item/create";
function page() {
  const { opened, handle } = useDisclosure();
  useEffect(() => {
    console.log("opened", opened);
  }, [opened]);
  return (
    <div>
      <button type="button" onClick={() => handle.open()}>
        open
      </button>
      <ModalContainer
        opened={opened}
        onClose={handle.close}
        margin="120px auto"
      >
        <CreateItem />
      </ModalContainer>
    </div>
  );
}

export default page;
