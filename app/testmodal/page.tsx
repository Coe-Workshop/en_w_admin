"use client";

import React from "react";
import useDisclosure from "../hook/useDisclosure";
import ModalContainer from "../components/ModalContainer/modalContainer";
function page() {
  const { opened, handle } = useDisclosure();
  return (
    <div>
      <button onClick={() => handle.open}>open</button>{" "}
      <button onClick={() => handle.open}>open</button>{" "}
      <button onClick={() => handle.open}>open</button>{" "}
      <button onClick={() => handle.open}>open</button>{" "}
      <button onClick={() => handle.open}>open</button>{" "}
      <button onClick={() => handle.open}>open</button>{" "}
      <button onClick={() => handle.open}>open</button>
      <ModalContainer opened={opened} onClose={handle.close}>
        <div>Hello modal</div>
      </ModalContainer>
    </div>
  );
}

export default page;
