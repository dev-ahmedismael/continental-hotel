import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../src/components/Layout";
import SSRProvider from "react-bootstrap/SSRProvider";
import { useEffect } from "react";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}
