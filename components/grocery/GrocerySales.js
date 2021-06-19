/** @format */

import Image from "next/image";
import Branch from "/public/icon.jpeg";

const GrocerySales = () => {
  return (
    <div className="card w-100 p-2 p-md-3 rounded">
      <div className="d-flex">
        <h5 className="mt-3">Delivery Received Reports</h5>
      </div>
      <div className="col-12">
        <p className="m-1 pt-3">Last Month</p>
        <div className="d-flex justify-content-between  pt-lg-2">
          <div className="progress" style={{ width: "300px", height: "20px" }}>
            <div style={{ width: "83%" }} className="progress-bar"></div>
          </div>
          <h5 className="">83%</h5>
        </div>
      </div>

      <p className="m-1 pt-3">This Month</p>
      <div className="d-flex justify-content-between pt-lg-3">
        <div className="progress" style={{  width: "300px", height: "20px" }}>
          <div style={{ width: "63%" }} className="progress-bar"></div>
        </div>
        <h5 className="">63%</h5>
      </div>
    </div>
  );
};

export default GrocerySales;
