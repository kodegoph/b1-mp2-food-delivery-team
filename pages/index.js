/** @format */

import BestSelling from "../components/grocery/BestSelling";
import BillingInfo from "../components/grocery/BillingInfo";
import Categories from "../components/grocery/Categories";
import GrocerySales from "../components/grocery/GrocerySales";
import HeaderDash from "../components/grocery/HeaderDash";
import OrderHistory from "../components/grocery/OrderHistory";
import TicketSales from "../components/grocery/TicketSales";
import LineChart from "../components/grocery/GroceryChart";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Dashboard | Grocery</title>
      </Head>
      <section id="admin-dashboard">
        <main className="me-main p-2 h-100 bg-color font-primary">
          <div className="container-fluid">
            <HeaderDash />
            <div className="row row-fluid gx-4">
              <div className="col-md-8 mb-3">
                <div className="row row-fluid gx-4">
                  <div className="col-md-8 mb-3 pt-3 pt-lg-0">
                    <Categories />
                  </div>
                  <BestSelling />

                 
                </div>
                <div className="row gx-3">
                  <div className="col-md-7 mb-3">
                    <OrderHistory />
                  </div>
                  <div className="col-md-5 mb-3">
                    <div className="row row-fluid gx-5 ">
                      <div className="col-md-12 mb-3">
                        <LineChart />
                      </div>
                    </div>
                    <div className="row row-fluid g-4 pt-2">
                      <div className="col-md-12 col-lg-12 col-xl-6 mb-3  col-xs-12">
                        <GrocerySales />
                      </div>
                      <div className="col-md-12 col-lg-12  col-xl-6  mb-3  col-xs-12">
                        <TicketSales />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <BillingInfo />
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Home;
