import React from "react";
import spinner from "../../assets/spinner.gif";
import "./loading.css";

const Loading = () => {
  return (
    <div className="spinnerr">
      <img src={spinner} alt="" />
    </div>
  );
};

export default Loading;
