import React from "react";
import Head from "next/head";
import { Fragment } from "react";
import usePageGenerator from "../hooks/usePageGenerator";

const Restaurants = (props) => {
  const data = props.data;
  return (
    <Fragment>
      <Head>
        <title>Restaurants & Bars</title>
      </Head>
      <section>{usePageGenerator(data)}</section>
    </Fragment>
  );
};

export default Restaurants;
