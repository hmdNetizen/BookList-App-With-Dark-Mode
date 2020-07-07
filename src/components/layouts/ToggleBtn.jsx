import React from "react";

const ToggleBtn = ({ toggleBtn }) => {
  return (
    <div onClick={toggleBtn} className="toggle" id="toggle">
      <div className="toggle-btn"></div>
    </div>
  );
};

export default ToggleBtn;
