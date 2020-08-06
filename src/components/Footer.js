import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <div>&#169; Great Northern Football League {year}</div>
    </footer>
  );
};

export default Footer;
