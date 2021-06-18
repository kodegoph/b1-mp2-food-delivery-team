import { useState, useEffect } from "react";

function OrderList(){
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
            </div>
          </div>
        </div>
      </section>
    </main>
    )
}