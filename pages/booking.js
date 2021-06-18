/** @format */

import * as React from "react";
import ReactMapGL from "react-map-gl";
import { useState, useEf } from "react";
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
        <div className="col-12 order-card bg-card-booking mb-3" key={key}>
          <a
            className="cursor-pointer text-decoration-none"
            onClick={onOpenModal}
          >
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
                <p className="d-md-none">Quantity: {user.food[0].quantity}</p>
                <p className="d-md-none">Price: ${user.food[0].price}</p>
                <p className="d-md-none">
                  Total Price: ${user.food[0].quantity * user.food[0].price}
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
              <div className="row mb-2">
                <div className="col-12 col-md-6 mb-3 mb-md-0 d-flex justify-content-center justify-content-md-between">
                  <div className="food-header d-flex">
                    <h2 className="me-3 mb-0">Food Delivery</h2>
                    <p id="search-result" className="mb-0 align-self-end">
                      {users.length} results
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                  {/* <a id="page-left" href="">
                    <i className="bx bxs-chevron-left bx-md"></i>
                  </a>
                  <a id="page-right" href="">
                    <i className="bx bxs-chevron-right bx-md"></i>
                  </a> */}
                </div>
              </div>
              {displayUsers}
            </div>
            <div className="col-12 col-md-6 col-xl-4 py-2">
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
