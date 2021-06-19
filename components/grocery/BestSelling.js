/** @format */

import { height, width } from "@material-ui/system";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Vector from "/public/Vector_14.svg";

const BestSelling = () => {
  return (
      <div
        className="row1-card card font-primary p-5 p-md-3  mb-3 
      "
      >
          <h4 className="">Best Selling</h4>
        <h6 className="mb-3">Trend 2021</h6>
          <Image
            src={`https://mykoreankitchen.com/wp-content/uploads/2020/03/1.-Kimchi-Jjim.jpg`}
            alt={`my-image`}
            height={110}
            width={190}
            objectFit="cover"
            className="rounded"
          />
        <h5 className="mt-3">Kimchi</h5>
        <div className="d-flex justify-content-between align-items-center">
          <a href="#" className="btn bg-color"   style={{ width: "100px" }}>
            81 Sell
          </a>

          <div className="d-flex">
            <Image className="pb-3 m2" src={Vector} alt="" />
            <p className="">29%</p>
          </div>
        </div>
      </div>
  );
};

export default BestSelling;
