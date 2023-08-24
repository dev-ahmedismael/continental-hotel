import React, { Fragment, useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import PageInfo from "./PageInfo";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <Fragment>
      {router.pathname === "/" ? null : <Header />}
      {router.pathname === "/" ? null : <PageInfo />}

      <main>{children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
