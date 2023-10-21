import React from "react";
import SignupModal from "./AuthModal/SignupModal";
import LoginModal from "./AuthModal/LoginModal";

const Modal = () => {
  return (
    <>
      <LoginModal />
      <SignupModal/>
    </>
  );
};

export default Modal;
