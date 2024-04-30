import React, { Fragment } from "react";

import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <Fragment>
      <Footer></Footer>
      <Outlet></Outlet>
    </Fragment>
  );
};

export default Layout;
