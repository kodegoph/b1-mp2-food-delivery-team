import "../scss/main.scss";
import Layout from "../components/layout/Layout";
import React from "react";
import App from "next/app";
import Signup from "./auth/signup";
import Login from "./auth/login";
import "bootstrap/dist/css/bootstrap.min.css";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    if (router.pathname.startsWith("/auth/login")) {
      return (
        <Login>
          <Component {...pageProps}></Component>
        </Login>
      );
    }
    if (router.pathname.startsWith("/auth/signup")) {
      return (
        <Signup>
          <Component {...pageProps}></Component>
        </Signup>
      );
    }
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
