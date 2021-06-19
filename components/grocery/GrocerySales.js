/** @format */

import Image from "next/image";
import Branch from "/public/icon.jpeg";

const GrocerySales = () => {
  return (
    <div className="card w-100 p-2 p-md-3 rounded">
      <div className="d-flex">
        <Image
          src={Branch}
          alt={"branch_pic"}
          height={40}
          width={40}
          priority
          objectFit="cover"
          className="rounded me-2"
        />
        <h6>Most Branch Sales</h6>
      </div>
      <div className="col-12">
        <p className="m-1 pt-4  ">Caloocan Branch</p>
        <div className="d-flex justify-content-between  pt-lg-2">
          <div className="progress" style={{ width: "100px", height: "5px" }}>
            <div style={{ width: "50%" }} className="progress-bar"></div>
          </div>
        </div>
      </div>

      <p className="m-1 pt-4">Pasay Branch</p>
      <div className="d-flex justify-content-between pt-lg-3">
        <div className="progress" style={{ width: "100px", height: "5px" }}>
          <div style={{ width: "78%" }} className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default GrocerySales;
