
import * as React from "react";

const TabSelector = ({ isActive, children, onClick }) => {
  return (
    <div>
      <button
        className={`mr-8 group inline-flex items-center px-2 py-4 border-0 font-medium text-sm leading-5 cursor-pointer whitespace-nowrap ${
          isActive
            ? "text-success"
            : "text-dark"  }`}
        style={
          ({ border: "none" },
          { width: "auto" },
          { height: "60px" },
          { color: "green" },
          { background: "transparent" })
        }
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
export default TabSelector;
