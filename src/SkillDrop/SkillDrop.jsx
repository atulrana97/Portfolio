import React from "react";
import { BiLogoReact, BiLogoCss3 } from "react-icons/bi";
import { DiNodejsSmall } from "react-icons/di";
import { IoLogoSass } from "react-icons/io";
import { AiOutlineHtml5 } from "react-icons/ai";
import "./styles.scss";

function SkillDrop() {
  return (
    <div className="skill-drop-wrapper">
      <BiLogoReact fill="#808080" style={{ fontSize: "200px" }} />
      <AiOutlineHtml5 fill="#808080" style={{ fontSize: "200px" }} />
      <BiLogoCss3 fill="#808080" style={{ fontSize: "200px" }} />
      <DiNodejsSmall fill="#808080" style={{ fontSize: "200px" }} />
      <IoLogoSass fill="#808080" style={{ fontSize: "200px" }} />
    </div>
  );
}

export default SkillDrop;
