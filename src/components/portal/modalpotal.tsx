import React from "react";
import ReactDOM from "react-dom";
import { ReactNode } from "react";

interface Potal {
  children: ReactNode;
}

const ModalPortal = ({ children }: Potal) => {
  const el = document.getElementById("modal");

  if (!el) {
    throw new Error("error");
  }
  return ReactDOM.createPortal(children, el);
};

export default ModalPortal;
