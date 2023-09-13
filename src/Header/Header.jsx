import React, { useState } from "react";
import "./styles.scss";

const Header = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Home", "About", "Projects", "Contact"];
  return (
    <div className="header-wrapper">
      <div className="image-wrapper">
        <img
          height={100}
          width={100}
          src="/assets/Free_Sample_By_Wix.jpg"
          alt="img"
        />
      </div>
      <div className="top-panel-main">
        {tabs.map((item, index) => {
          return (
            <div
              className={`top-panel-item${
                index === activeTab ? "-active" : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
