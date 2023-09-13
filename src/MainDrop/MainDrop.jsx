import React from "react";
import LeftMainDrop from "./LeftMainDrop/LeftMainDrop";
import RightMainDrop from "./RightMainDrop/RightMainDrop";
import "./styles.scss";

const MainDrop = () => {
  return (
    <div className="main-drop">
      <LeftMainDrop />
      <RightMainDrop />
    </div>
  );
};

export default MainDrop;
