import React from "react";
import Head from "next/head";
import { Fragment } from "react";
import usePageGenerator from "../hooks/usePageGenerator";

const Meetings = (props) => {
  const data = props.data;
  return (
    <Fragment>
      <Head>
        <title>Meetings & Events</title>
      </Head>
      <section>{usePageGenerator(data)}</section>
    </Fragment>
  );
};

export default Meetings;
