import React from "react";

const CopyRight = () => {
  return (
    <div className="copyRight" style={{ width: "100%" }}>
      <p>&copy; Copyright {new Date().getFullYear()}</p>
    </div>
  );
};

export default CopyRight;
