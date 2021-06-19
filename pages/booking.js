/** @format */

import * as React from "react";
import ReactMapGL from "react-map-gl";
import { useState, useEffect } from "react";
import JSONDATA from "../public/data/MOCK_DATA.json";
import axios from "axios";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import ReactPaginate from "react-paginate";

export const Booking = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  const [searchTerm, setSearchTerm] = useState("");
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
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const usersPerPage = 4;
  const pagesVisited = pageNumber * usersPerPage;
  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .filter((user) => {
      let orderLength = 0;
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
        <div className="col-12 order-card bg-card-booking mt-3 p-3" key={key}>
          <a
            className="cursor-pointer text-decoration-none"
            onClick={onOpenModal}
          >
            <div className="row">
              <div className="col-12 col-lg-5 col-xl-3 d-flex justify-content-center justify-content-lg-start">
                <img src={user.img} alt={user.restaurant_name} />
              </div>
              <div className="col-12 col-lg-4 col-xl-5 d-flex flex-column align-items-center align-items-lg-start">
                <div className="badges">
                  <span className="badge bg-badge-secondary">Pro</span>
                </div>
                <h4>{user.city}</h4>
                <h6>
                  Street Address:{" "}
                  <span id="order-num">{user.street_address}</span>
                </h6>
              </div>
              <div className="col-12 col-lg-3 col-xl-4 d-flex flex-column align-items-center align-items-lg-start justify-content-end">
                <h4>{user.restaurant_name}</h4>
                <h6>
                  Order Number: <span id="order-num">{user.id}</span>
                </h6>
              </div>
            </div>
          </a>
          <Modal open={open} onClose={onCloseModal} center>
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6">
                  <h3>Items</h3>
                </div>
                <div className="col-12 col-md-2 justify-content-center d-none d-md-flex">
                  <h3>Qty</h3>
                </div>
                <div className="col-12 col-md-2 justify-content-center d-none d-md-flex">
                  <h3>Price</h3>
                </div>
                <div className="col-12 col-md-2 justify-content-center d-none d-md-flex">
                  <h3>Total Price</h3>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 justify-content-center justify-content-md-start d-flex">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <img
                        src={user.img}
                        alt={user.restaurant_name}
                        className="w-100 h-100 me-3"
                      />
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-start flex-column">
                      <h4 className="mt-2 mt-md-0">{user.food[0].food_type}</h4>
                      <h3>{user.food[0].food_name}</h3>
                      <p className="d-md-none">
                        Quantity: {user.food[0].quantity}
                      </p>
                      <p className="d-md-none">Price: ${user.food[0].price}</p>
                      <p className="d-md-none">
                        Total Price: $
                        {user.food[0].quantity * user.food[0].price}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-2 justify-content-center align-items-center d-flex d-none d-md-block">
                  <p className="text-center">{user.food[0].quantity}</p>
                </div>
                <div className="col-12 col-md-2 justify-content-center align-items-center d-flex d-none d-md-block">
                  <p className="text-center">${user.food[0].price}</p>
                </div>
                <div className="col-12 col-md-2 justify-content-center align-items-center d-flex d-none d-md-block">
                  <p className="text-center">
                    ${user.food[0].quantity * user.food[0].price}
                  </p>
                </div>
              </div>
            </div>
          </Modal>
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
      <section id="search-and-profile" className="mb-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6 col-xl-8 py-2">
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
              <div className="row mb-2">
                <div className="col-12 mb-3 mb-md-0 d-flex">
                  <div className="food-header d-flex">
                    <h2 className="me-3 mb-0">Food Delivery</h2>
                    <p id="search-result" className="mb-0 align-self-end">
                      {users.length} results
                    </p>
                  </div>
                </div>
              </div>
              {displayUsers}
            </div>
            <div className="col-12 col-md-6 col-xl-4 px-3 py-2">
              <div className="row">
                <div className="card col-12 p-3 map-col mb-3">
                  <h3>Track Order:</h3>
                  <ReactMapGL
                    mapStyle="mapbox://styles/unsiga25/ckor0gczt3du817p6q8gb6hf5"
                    mapboxApiAccessToken={process.env.MAPBOX_KEY}
                    {...viewport}
                    width="100%"
                    height="100%"
                    onViewportChange={(viewport) => setViewport(viewport)}
                  />
                  <h4 className="pt-2">Delivery by:</h4>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <img
                        src="https://picsum.photos/68/68"
                        className="driver-img me-3"
                      />
                      <div className="driver-details">
                        <p className="bike mb-2">John Doe</p>
                        <p className="bike mb-0">Yamaha Bike 123</p>
                      </div>
                    </div>
                    <div className="contact-driver d-flex align-items-center flex-column justify-content-center flex-lg-row">
                      <a href="">
                        <i class="bx bxs-phone bx-2x me-0"></i>
                      </a>
                      <a href="">
                        <i class="bx bx-current-location bx-2x me-0"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card col-12">
                  <h4 className="pt-2">Order Status:</h4>
                  <div className="progress text-center mb-3">
                    <div
                      className="progress-bar bg-color"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      75%
                    </div>
                  </div>
                  <div className="text-center">
                    <h5>On Delivery</h5>
                    <p>Sat, 23 Jul 2020, 01:24 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        </div>
      </section>
    </main>
  );
};
export default Booking;
