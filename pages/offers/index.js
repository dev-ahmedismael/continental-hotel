import Head from "next/head";
import { Fragment } from "react";
import Offers from "../../src/components/Offers";

export default function offers() {
  return (
    <Fragment>
      <Head>
        <title>Offers</title>
      </Head>
      <Offers />
    </Fragment>
  );
}
