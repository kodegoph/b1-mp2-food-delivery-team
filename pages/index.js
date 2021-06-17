<<<<<<< HEAD
import BestSelling from '../components/grocery/BestSelling'
import BillingInfo from '../components/grocery/BillingInfo'
import Categories from '../components/grocery/Categories'
import GrocerySales from '../components/grocery/GrocerySales'
import HeaderDash from '../components/grocery/HeaderDash'
import OrderHistory from '../components/grocery/OrderHistory'
import TicketSales from '../components/grocery/TicketSales'
import LineChart from '../components/grocery/GroceryChart'
import Head from 'next/head'



const Home = () => {
  return (
    <>
        <Head>
            <title>Dashboard | Grocery</title>
        </Head>
       <main className="me-main p-2 h-100 bg-color font-primary text-dark">
       <div className="container-fluid">
          <HeaderDash/>
        <div className="row row-fluid gx-4">
          <div className="col-md-8 mb-3">
         
            <div className="row row-fluid gx-4">
              <div className="col-md-8 mb-3 pt-3 pt-lg-0">   
                  <Categories/>
              </div>
              <div className="col-md-4 mb-3">
                <BestSelling/>
              </div>   
=======
const Home = () => {
  return (
    <main className="me-main p-4 h-100 bg-color font-primary">
      <div className="container-fluid">
        <div className="row row-fluid gx-3 pt-5 pt-lg-3">
          <div className="col-md-5 mb-3 px-3">
            <h2 className="text-bold">Go-Groceries</h2>
          </div>
          <div className="col-md-3 mb-6 px-3">
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="row row-fluid gx-4">
          <div className="col-md-8 mb-3">
            <div className="row row-fluid gx-4">
              <div className="col-md-8 mb-3 pt-3 pt-lg-0">
                <div className="card bg-white text-dark p-md-3">
                  <div className="card-body">Select Movie Categorie</div>
                  <div className="d-flex justify-content-between px-3">
                    <p>Select your favourite food menu</p>
                    <h6>
                      <a href="">View All</a>
                    </h6>
                  </div>
                  <div
                    className="
                      px-3
                      d-flex
                      row
                      align-items-center
                      justify-content-center
                    "
                  >
                    <div className="text-center col-sm-6 col-xl-3">
                      <div
                        className="card bg-light border-3 pd-3 m-auto"
                        style={{ width: "8rem", height: "8rem" }}
                      ></div>
                      <p className="">Action</p>
                    </div>
                    <div className="text-center col-sm-6 col-xl-3">
                      <div
                        className="card bg-light border-3 m-auto"
                        style={{ width: "8rem", height: "8rem" }}
                      ></div>
                      <p className="">Action</p>
                    </div>
                    <div className="text-center col-sm-3 col-md-6 col-xl-3">
                      <div
                        className="card bg-light border-3 m-auto"
                        style={{ width: "8rem", height: "8rem" }}
                      ></div>
                      <p className="">Action</p>
                    </div>
                    <div className="text-center col-sm-3 col-md-6 col-xl-3">
                      <div
                        className="card bg-light border-3 m-auto"
                        style={{ width: "8rem", height: "8rem" }}
                      ></div>
                      <p className="">Action</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-3">
                <div className="card bg-white text-dark px-4 p-3">
                  <div className="d-flex">
                    <div className="card-body">Best Selling</div>
                    <img src="./images/two dots.svg" alt="" />
                  </div>
                  <p className="mg-0">Trend 2021</p>
                  <div
                    className="card bg-light border-3 rounded"
                    style={{ width: "100%", height: "6rem" }}
                  ></div>
                  <h6>Billing Information</h6>
                  <div className="d-flex justify-content-between">
                    <a
                      href="#"
                      className="btn btn-primary btn-sm disabled h-75"
                      role="button"
                      aria-disabled="true"
                    >
                      81 Sell
                    </a>
                    <div className="d-flex">
                      <img
                        className="pb-3"
                        src="./images/Vector 14.svg"
                        alt=""
                      />
                      <p className="text-success">29%</p>
                    </div>
                  </div>
                </div>
              </div>

>>>>>>> a0ec9602f31bfad9049ab4befbf2daece3f427d8
              <div className="row row-fluid gx-5">
                <div className="col-md-6 mb-3">
                  <h6 className="text-decoration-none">
                    <a href="">Report Transacion</a>
                  </h6>
                </div>
                <div className="col-md-6 mb-3">
                  <h6 className="text-decoration-none">
                    <a href="">Most Spend</a>
                  </h6>
                </div>
              </div>
            </div>
<<<<<<< HEAD
            <div className="row gx-3">
              <div className="col-md-7 mb-3">
               <OrderHistory/>
              </div>
              <div className="col-md-5 mb-3">
                <div className="row row-fluid gx-5">
                  <div className="col-md-12 mb-3">   
                  <LineChart/>
                  </div>
                </div>       
                <div className="row row-fluid gx-3">
                  <div className="col-md-6 mb-3">                      
                     <GrocerySales/>
                   
                  </div>
                  <div className="col-md-6 mb-3">
                   <TicketSales/>
=======

            <div className="row gx-3">
              <div className="col-md-7 mb-3">
                <div className="card text-dark h-100 p-5 align-top">
                  <div className="d-flex justify-content-between">
                    <h6>Order history</h6>
                    <div className="d-flex text-center">
                      <h5>Latest</h5>
                      <div className="dropdown">
                        <button
                          className="btn btn-default dropdown-toggle"
                          type="button"
                          id="dropdownMenu1"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="true"
                        >
                          <span className="caret"></span>
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenu1"
                        >
                          <li>
                            <a href="#">Action</a>
                          </li>
                          <li>
                            <a href="#">Another action</a>
                          </li>
                          <li>
                            <a href="#">Something else here</a>
                          </li>
                          <li role="separator" className="divider"></li>
                          <li>
                            <a href="#">Separated link</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <h5>$1.337</h5>
                    <img src="./images/Arrow - Down.svg" alt="" />
                    <p>| This month</p>
                  </div>
                  <ul className="list-group">
                    <li
                      className="
                        list-group-item
                        border-white
                        d-flex
                        justify-content-between
                      "
                    >
                      <div className="d-flex">
                        <img
                          className="rounded-circle"
                          src="./images/Ellipse 55.svg"
                          style={{ width: "60px", height: "60px" }}
                        />
                        <div style={{ paddingLeft: "0", margin: "10px" }}>
                          <span>Cau  Africa</span>
                          <p>
                            Number Order #1510031
                            <br />
                          </p>
                        </div>
                      </div>
                      <div>
                        <h6>$19.89</h6>
                      </div>
                    </li>
                    <li
                      className="
                        list-group-item
                        border-white
                        d-flex
                        justify-content-between
                      "
                    >
                      <div className="d-flex">
                        <img
                          className="rounded-circle"
                          src="./images/Ellipse 55.svg"
                          style={{ width: "60px", height: "60px" }}
                        />
                        <div className="pd-0 m-pd-5">
                          <span>Cau  Africa</span>
                          <p>
                            Number Order #1510031
                            <br />
                          </p>
                        </div>
                      </div>
                      <div>
                        <h6>$19.89</h6>
                      </div>
                    </li>
                    <li
                      className="
                        list-group-item
                        border-white
                        d-flex
                        justify-content-between
                      "
                    >
                      <div className="d-flex">
                        <img
                          className="rounded-circle"
                          src="./images/Ellipse 55.svg"
                          style={{ width: "60px", height: "60px" }}
                        />
                        <div className="pd-0 m-pd-5">
                          <span>Cau  Africa</span>
                          <p>
                            Number Order #1510031
                            <br />
                          </p>
                        </div>
                      </div>
                      <div>
                        <h6>$19.89</h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-5 mb-3">
                <div className="row row-fluid gx-5">
                  <div className="col-md-12 mb-3">
                    <div className="card h-100">
                      <div className="card-header">
                        <span className="me-2">
                          <i className="bi bi-bar-chart-fill"></i>
                        </span>
                        Area Chart Example
                      </div>
                      <div className="card-body">
                        <canvas
                          className="chart"
                          style={{ width: "200", height: "100" }}
                        ></canvas>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row row-fluid gx-3">
                  <div className="col-md-6 mb-3">
                    <div className="card w-100% p-3">
                      <div className="d-flex">
                        <div
                          className="card bg-light border-3"
                          style={{ width: "4rem", height: "4rem" }}
                        ></div>
                        <div className="card bg-white border-0 text-center">
                          <h6>Ticketing Sells</h6>
                        </div>
                      </div>
                      <p>This Month</p>
                      <div className="d-flex d-inline-flex">
                        <div
                          className="progress"
                          style={{ width: "140px", height: "5px" }}
                        >
                          <div
                            style={{ width: "50%" }}
                            className="progress-bar"
                          ></div>
                        </div>
                        <p>$141</p>
                      </div>
                      <p>Last Month</p>
                      <div className="d-flex">
                        <div
                          className="progress"
                          style={{ width: "140px", height: "5px" }}
                        >
                          <div
                            style={{ width: "50%" }}
                            className="progress-bar"
                          ></div>
                        </div>
                        <p>$141</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <div className="card w-100% p-3">
                      <h6>Ticketing Sells</h6>
                      <div className="d-flex pt-4">
                        <i className="bi bi-record green-text p-l-3"></i>
                        <div>
                          <p>Parent's</p>
                          <p>78%</p>
                        </div>
                      </div>
                      <div className="d-flex">
                        <i className="bi bi-record green-text pr-3"></i>
                        <div>
                          <p>Teenagers</p>
                          <p>48 %</p>
                        </div>
                      </div>
                    </div>
>>>>>>> a0ec9602f31bfad9049ab4befbf2daece3f427d8
                  </div>
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
          <div className="col-md-4 mb-3">         
           <BillingInfo/>                     
          </div>
          </div>
       
      </div>
    </main>
    </>
=======

          <div className="col-md-4 mb-3">
            <div className="card h-100 p-5">
              <h3 className="p-xxl-3">Billing Information</h3>
              <h6 className="p-xxl-3">Point Location</h6>
              <div className="p-3 card bg-light">
                <h6>St. Village 1191 Est, NYC</h6>
                <p>New York, USA</p>
              </div>
              <h6 className="mt-5">Voucher</h6>

              <textarea className="bg-light" name="" id="Voucher">
                Code Voucher
              </textarea>

              <h6 className="mt-5 mb-3">Payment</h6>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label className="form-check-label" for="flexRadioDefault1">
                  Credit Card
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  checked
                />
                <label className="form-check-label" for="flexRadioDefault2">
                  Paypal
                </label>
              </div>
              <div className="d-flex mt-5">
                <div
                  className="card bg-light border-3"
                  style={{ width: "8rem", height: "8rem" }}
                ></div>
                <div className="card p-4 bg-white border-0">
                  <h6>Super Fresh Carrot</h6>
                  <p>Variant: Fresh</p>
                </div>
              </div>
              <ul className="list-group list-group-flush border-0 pt-2">
                <li
                  className="
                    border-0
                    list-group-item
                    d-flex
                    justify-content-between
                    align-items-center
                    flex-wrap
                  "
                >
                  <h6 className="mb-0">Subtotal</h6>
                  <span className="text-secondary">$149.99</span>
                </li>
                <li
                  className="
                    border-0
                    list-group-item
                    d-flex
                    justify-content-between
                    align-items-center
                    flex-wrap
                  "
                >
                  <h6 className="mb-0">Shipping</h6>
                  <span className="text-secondary">Free</span>
                </li>
                <li
                  className="
                    border-0 border-none
                    list-group-item
                    d-flex
                    justify-content-between
                    align-items-center
                    flex-wrap
                  "
                >
                  <h6 className="mb-0">Total</h6>
                  <span className="text-secondary">$149.99</span>
                </li>
              </ul>
              <div className="d-grid gap-2 col-6 mx-auto mt-5">
                <button className="btn btn-warning rounded-pill" type="button">
                  Checkout Now
                </button>
              </div>
            </div>
          </div>
          <div className="row gx-5">
            <div className="col-md-3 mb-3">
              <div className="card bg-primary text-white h-100">
                <div className="card-body py-5">Primary Card</div>
                <div className="card-footer d-flex">
                  View Details
                  <span className="ms-auto">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card bg-warning text-dark h-100">
                <div className="card-body py-5">Warning Card</div>
                <div className="card-footer d-flex">
                  View Details
                  <span className="ms-auto">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card bg-success text-white h-100">
                <div className="card-body py-5">Success Card</div>
                <div className="card-footer d-flex">
                  View Details
                  <span className="ms-auto">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card bg-danger text-white h-100">
                <div className="card-body py-5">Danger Card</div>
                <div className="card-footer d-flex">
                  View Details
                  <span className="ms-auto">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mb-3">
            <div className="chart-container" style={{ width: "600px%" }}>
              <canvas id="lineChart"></canvas>
            </div>
            <div className="card h-100">
              <div className="card-header">
                <span className="me-2">
                  <i className="bi bi-bar-chart-fill"></i>
                </span>
                Area Chart Example
              </div>
              <div className="card-body">
                <canvas className="chart" width="200" height="200"></canvas>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-header">
                <span className="me-2">
                  <i className="bi bi-bar-chart-fill"></i>
                </span>
                Area Chart Example
              </div>
              <div className="card-body">
                <canvas className="chart" width="400" height="200"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row row-fluid gx-5">
            <div className="col-md-3 mb-3">
              <div className="card bg-warning text-dark h-100">
                <div className="card-body py-5">Warning Card</div>
                <div className="card-footer d-flex">
                  View Details
                  <span className="ms-auto">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card bg-success text-white h-100">
                <div className="card-body py-5">Success Card</div>
                <div className="card-footer d-flex">
                  View Details
                  <span className="ms-auto">
                    <i className="bi bi-chevron-right"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
>>>>>>> a0ec9602f31bfad9049ab4befbf2daece3f427d8
  );
};

export default Home;
