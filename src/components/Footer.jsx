import React from "react";

function Footer() {
  const date = new Date();

  return (
    <div className="sticky-bottom border-top" style={{ height: "10vh" }}>
      Chemsificador {date.getFullYear()}
    </div>
  );
}

export default Footer;
