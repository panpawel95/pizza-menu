import React from "react";

export function Header() {
  /* const style = { color: "red", fontSize: "48px", textTransform: "uppercase" }; */
  const style = { color: "green" };
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}
