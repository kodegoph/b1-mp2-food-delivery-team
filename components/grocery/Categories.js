/** @format */

import Modals from "../cards/Modals";
import Image from "next/image";

const Categories = () => {
  return (
    <div className="card p-5 p-md-3 row1-card">
      <h4> Korean Food Categories</h4>
      <div className="row">
        <h6 className="col-8 mb-0">Select your favourite food menu</h6>
        <div className=" col-4 d-flex align-items-center justify-content-end">
          <Modals />
        </div>
      </div>
      <div className="row mt-3">
        <div className="text-center col-sm-6 col-lg-3 col-xl-3  cursor-pointer">
          <Image
            src={`https://mykoreankitchen.com/wp-content/uploads/2021/02/1.-Yukgaejang.webp`}
            alt={`my-image`}
            height={200}
            width={200}
            priority
            objectFit="cover"
            className="rounded"
          />
          <p className="pt-4">Spicy</p>
        </div>
        <div className="text-center col-sm-6 col-lg-3 col-xl-3 cursor-pointer">
          <Image
            src={`https://mykoreankitchen.com/wp-content/uploads/2006/09/1.1.-Ojingeo-Deopbap.webp`}
            alt={`my-image`}
            height={200}
            width={200}
            objectFit="cover"
            className="rounded"
          />
          <p className="pt-4">Rice Meals</p>
        </div>
        <div className="text-center col-sm-6 col-lg-3 col-xl-3 cursor-pointer">
          <Image
            src={`https://mykoreankitchen.com/wp-content/uploads/2020/08/1.-gochujang-chicken.jpg`}
            alt={`my-image`}
            height={200}
            width={200}
            objectFit="cover"
            className="rounded"
          />
          <p className="pt-4">Grilled</p>
        </div>

        <div className="text-center col-sm-6 col-lg-3 col-xl-3 cursor-pointer">
          <Image
            src={`https://mykoreankitchen.com/wp-content/uploads/2018/02/2.-Bulgogi-Stew.jpg`}
            alt={`my-image`}
            height={200}
            width={200}
            objectFit="cover"
            className="rounded"
          />
          <p className="pt-4">Soup</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
