import React from "react";

const cardStyles = {
  background: "whitesmoke",
  borderRadius: 3,
  width: "100%",
  height: "100%",
  cursor: "pointer",
  userSelect: "none",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0
};

const Card = ({ zIndex = 0, children }) => (
  <div style={{ ...cardStyles, zIndex }}>{children}</div>
);

export default Card;