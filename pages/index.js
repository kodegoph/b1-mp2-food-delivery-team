/** @format */

import BestSelling from "../components/grocery/BestSelling";
import BillingInfo from "../components/grocery/BillingInfo";
import Categories from "../components/grocery/Categories";
import GrocerySales from "../components/grocery/GrocerySales";
import HeaderDash from "../components/grocery/HeaderDash";
import OrderHistory from "../components/grocery/OrderHistory";
import LineChart from "../components/grocery/GroceryChart";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Dashboard | K-Suttle</title>
      </Head>
      <section id="admin-dashboard">
        <main className="me-main p-2 h-100 bg-color font-primary">
          <div className="container-fluid">
            <HeaderDash />
            <div className="row">
              <div className="col-md-8 mb-3">
                <div className="row">
                  <div className="col-12 col-lg-8 p-3">
                    <Categories />
                  </div>
                  <div className="col-12 col-lg-4 p-3">
                    <BestSelling />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-7 mb-3 py-3">
                    <OrderHistory />
                  </div>
                  <div className="col-12 col-lg-5 mb-3 py-3">
                    <div className="row">
                      <div className="col-md-12 mb-3">
                        <LineChart />
                      </div>
                      <div className="col-12 mb-3">
                        <GrocerySales />
                      </div>
                      <div className="col-12 mb-3">
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4 mb-3">
                <div className="row">
                  <div className="col-12 p-3 mb-3">
                    <BillingInfo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Home;
