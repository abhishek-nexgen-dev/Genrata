import React from "react";

const LeftPanel = ({ imgUrl }) => {
  return (
    <aside className="hidden md:flex flex-col items-center justify-center  text-white">
      <img
        src={imgUrl}
        alt="Brand Logo"
        className="w-full h-full object-cover"
      />
    </aside>
  );
};

export default LeftPanel;
