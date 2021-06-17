import * as React from "react";
import ReactMapGL from "react-map-gl";
import { useState } from "react";
import JSONDATA from "../public/data/MOCK_DATA.json";
<<<<<<< HEAD
=======
import axios from "axios";
import ReactPaginate from "react-paginate";
>>>>>>> a0ec9602f31bfad9049ab4befbf2daece3f427d8

export const Booking = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  const [searchTerm, setSearchTerm] = useState("");
<<<<<<< HEAD
  return (
    <main className="me-main p-4 h-100 bg-color font-primary">
=======
  let [users, setUsers] = useState(
    JSONDATA.filter((val) => {
      if (searchTerm == "" && val.is_pending == true) {
        return val;
      } else if (
        val.restaurant_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        val.is_pending == true
      ) {
        return val;
      }
    }).sort((a, b) => (a.color > b.color ? 1 : -1))
  );
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .filter((user) => {
      if (searchTerm == "") {
        return user;
      } else if (
        user.restaurant_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        user.is_pending == true
      ) {
        return user;
      }
    })
    .map((user, key) => {
      return (
        <div className="col-12 order-card bg-card-booking mb-3" key={key}>
          <div className="row">
            <div className="col-12 col-lg-5 col-xl-3 d-flex justify-content-center justify-content-lg-start">
              <img src={user.img} alt={user.restaurant_name} />
            </div>
            <div className="col-12 col-lg-7 col-xl-9 d-flex flex-column align-items-center align-items-lg-start">
              <div className="badges">
                <span className="badge bg-badge-secondary">Pro</span>
              </div>
              <h4>{user.restaurant_name}</h4>
              <h6>
                Order Number: <span id="order-num">{user.id}</span>
              </h6>
              <button className="btn bg-secondary">Complete</button>
            </div>
          </div>
        </div>
      );
    })
    .sort((a, b) => (a.color > b.color ? 1 : -1));
  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <main className="me-main p-4 h-100 bg-color font-primary vh-100 overflow-y-scroll">
>>>>>>> a0ec9602f31bfad9049ab4befbf2daece3f427d8
      <section id="search-and-profile" className="mb-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-8">
              <div className="search-input d-flex w-100 mb-3 position-relative">
                <a href="" type="reset" className="position-absolute x-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </a>
                <input
                  id="searchId"
                  type="text"
                  className="search-order"
                  placeholder="Enter Restaurant/Order ID"
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
              </div>
              <div className="row">
                <div className="col-12 col-md-6 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-between">
                  <div className="food-header d-flex">
                    <h2 className="me-3 mb-0">Food Delivery</h2>
<<<<<<< HEAD
                    {JSONDATA.filter((val) => {
                      if (searchTerm == "") {
                        return (val = "");
                      } else if (
                        val.restaurant_name
                          .toLowerCase()
                          .includes(searchTerm.toLowerCase()) &&
                        val.is_pending == true
                      ) {
                        return val;
                      }
                    }).map((val, key) => {
                      return (
                        <p
                          id="search-result"
                          className="mb-0 align-self-end"
                          key={key}
                        >
                          results
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                  <a id="page-left" href="">
=======
                    <p id="search-result" className="mb-0 align-self-end">
                      results
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                  {/* <a id="page-left" href="">
>>>>>>> a0ec9602f31bfad9049ab4befbf2daece3f427d8
                    <i className="bx bxs-chevron-left bx-md"></i>
                  </a>
                  <a id="page-right" href="">
                    <i className="bx bxs-chevron-right bx-md"></i>
<<<<<<< HEAD
                  </a>
                </div>
              </div>
              {JSONDATA.filter((val) => {
                if (searchTerm == "") {
                  return (val = "");
                } else if (
                  val.restaurant_name
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) &&
                  val.is_pending == true
                ) {
                  return val;
                }
              }).map((val, key) => {
                return (
                  <div
                    className="col-12 order-card bg-card-booking mb-3"
                    key={key}
                  >
                    <div className="row">
                      <div className="col-12 col-lg-5 col-xl-3 d-flex justify-content-center justify-content-lg-start">
                        <img src={val.img} alt={val.restaurant_name} />
                      </div>
                      <div className="col-12 col-lg-7 col-xl-9 d-flex flex-column align-items-center align-items-lg-start">
                        <div className="badges">
                          <span className="badge bg-badge-secondary">Pro</span>
                        </div>
                        <h4>{val.restaurant_name}</h4>
                        <h6>
                          Order Number: <span id="order-num">{val.id}</span>
                        </h6>
                        <button className="btn bg-secondary">Complete</button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-12 col-md-6 col-xl-4">
=======
                  </a> */}
                </div>
              </div>
              {displayUsers}
            </div>
            <div className="col-12 col-md-6 col-xl-4 py-2">
>>>>>>> a0ec9602f31bfad9049ab4befbf2daece3f427d8
              <ReactMapGL
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxApiAccessToken={process.env.MAPBOX_KEY}
                {...viewport}
                width="100%"
                height="100%"
                onViewportChange={(viewport) => setViewport(viewport)}
              />
            </div>
          </div>
<<<<<<< HEAD
=======
          <div className="row">
            <div className="col-12 d-flex justify-content-center mt-3">
              <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttns"}
                nextLinkClassName={"nextBttns"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
              />
            </div>
          </div>
>>>>>>> a0ec9602f31bfad9049ab4befbf2daece3f427d8
        </div>
      </section>
    </main>
  );
};
export default Booking;
