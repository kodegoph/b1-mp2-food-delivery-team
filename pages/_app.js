import "../scss/main.scss";
import Layout from "../components/layout/Layout";
import React from "react";
import App from "next/app";
import Login from "../components/LoginForm";
import "bootstrap/dist/css/bootstrap.min.css";

// import styles from '../scss/sidebar.css'

class MyApp extends App {
    constructor(props) {
        super(props);
        this.logIn = this.logIn.bind(this);
    }
    componentDidMount() {
        const {router} = this.props;
        const isLoggedIn = localStorage.getItem("_gLogged") === "yes";
        if (!isLoggedIn) {
            router.push("/login");
        }
    }
    logIn() {
        const {router} = this.props;
        localStorage.setItem("_gLogged", "yes");
        router.push("/");
    }
    render() {
        const {Component, pageProps, router} = this.props;
        if (router.pathname.startsWith("/login")) {
            return <Login logIn={this.logIn} />;
        }
    
        return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        );
    }
}

export default MyApp;
