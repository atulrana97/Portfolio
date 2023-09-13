import React from "react";
import { AiTwotoneMail, AiOutlineDownload } from "react-icons/ai";
import "./styles.scss";

const RightMainDrop = () => {
  return (
    <div className="right-main-drop">
      Hello!
      <br />
      I'm Atul Rana
      <div className="sub-heading">
        I'm a <span className="span-text">Front-End developer</span> based in
        Delhi-NCR(India), who loves to craft amazing web and app design
        experience for web and mobile app.
      </div>
      <div className="direct-contact">
        <div className="email-me">
          <AiTwotoneMail fill="#42a5ff" />
          <span style={{ marginLeft: "0.4rem" }}>Email Me</span>
        </div>
        <div className="download-resume">
          <AiOutlineDownload fill="white" />
          <span style={{ marginLeft: "0.4rem" }}>Download CV</span>
        </div>
      </div>
    </div>
  );
};
export default RightMainDrop;
