import React from "react";

export const Spacer = ({ mT = "0", mB = "100" }) => {
  return (
    <div
      style={{
        marginTop: `${mT}px`,
        marginBottom: `${mB}px`,
      }}
    />
  );
};
