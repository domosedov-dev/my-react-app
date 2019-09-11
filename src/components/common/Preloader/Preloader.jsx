import React from "react";
import preloader from "../../../assets/images/preloader.svg";

const Preloader = props => {
  return (
    <div style={{ width: "200px" }}>
      <img src={preloader} alt={"preloader"} />
    </div>
  );
};

export default Preloader;
