import React from "react";
import "./styles.css";

const GrayImg = (props) => {
  return (
    <img
      className={props.gray ? "gray-img" : "color-img"}
      src={props.img_url}
    />
  );
};

export default GrayImg;
