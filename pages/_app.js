import "../scss/main.scss";
import Layout from "../components/layout/Layout";
<<<<<<< HEAD
import React from 'react'
import App from 'next/app'
import Signup from './auth/signup'
import Login from './auth/login'
import 'bootstrap/dist/css/bootstrap.min.css';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    if (router.pathname.startsWith('/auth/login')) {
      return (
        <Login>
          
            <Component {...pageProps}></Component>

         </Login>
          
      )
    }
    if (router.pathname.startsWith('/auth/signup')) {
      return (
       
           <Signup>
            <Component {...pageProps}></Component>
         </Signup>
          
      )
    }
     return (
    
=======

function MyApp({ Component, pageProps }) {
  return (
>>>>>>> f0b966a0061297398d50079a8487d3a1f8be8ed8
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
<<<<<<< HEAD
  }
=======
>>>>>>> f0b966a0061297398d50079a8487d3a1f8be8ed8
}

export default MyApp;
