import React from "react";
import { Outlet } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <Outlet />
      <footer>
        <p>&copy; 2023 News Website. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
