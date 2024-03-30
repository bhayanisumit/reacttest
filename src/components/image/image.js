import React from "react";

const Image = ({ source, altText, className ,height }) => {
  return <img   src={source} alt={altText} className={className} height={height} />;
};

export default Image;
