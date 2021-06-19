/** @format */

import Image from "next/image";
import Dropdown from "react-bootstrap/Dropdown";

const BillingInfo = () => {
  return (
    <div className="card p-5 p-md-4 mb-3 rounded-3">
      <h4>Most Favorite Korean Food</h4>
      <div className="d-flex justify-content-around">
        <h6 className="p-2 cursor-pointer">Monthly</h6>
        <h6 className="p-2 cursor-pointer">Weekly</h6>
        <h6 className="p-2 cursor-pointer text-decoration-underline">Today</h6>
      </div>

      <div className="row">
        <div className="col-12 col-lg-6 p-3 mt-3 text-center">
          <Image
            src={`https://mykoreankitchen.com/wp-content/uploads/2020/06/2.-Korean-Ground-Beef-And-Rice-Bowls.jpg`}
            alt={`my-image`}
            height={400}
            width={300}
            objectFit="cover"
          />
          <p className="card-text">267k Likes </p>
          <p>KOREAN GROUND BEEF</p>
        </div>
        <div className="col-12 col-lg-6 p-3 mt-3 text-center">
          <Image
            src={`https://mykoreankitchen.com/wp-content/uploads/2020/07/9.-Air-Fryer-Korean-Chicken-Wings.jpg`}
            alt={`my-image`}
            height={400}
            width={300}
            objectFit="cover"
          />
          <p className="card-text">27k Likes </p>
          <p>KOREAN CHICKEN WINGS</p>
        </div>
        <div className="col-12 col-lg-6 p-3 mt-3 text-center">
          <Image
            src={`https://mykoreankitchen.com/wp-content/uploads/2006/10/2.-Korean-Tuna-Pancakes.jpg`}
            alt={`my-image`}
            height={340}
            width={300}
            objectFit="cover"
          />
          <p className="card-text">27k Likes </p>
          <p>Korean Tuna Pancakes</p>
        </div>
        <div className="col-12 col-lg-6 p-3 mt-3 text-center">
          <Image
            src={`https://mykoreankitchen.com/wp-content/uploads/2020/04/1.-Dalgona-Coffee.jpg`}
            alt={`my-image`}
            height={340}
            width={300}
            objectFit="cover"
          />
          <p className="card-text">27k Likes </p>
          <p>Dalgona Coffee</p>
        </div>
        <div className="col-12 col-lg-6 p-3 mt-3 text-center">
          <Image
            src={`https://mykoreankitchen.com/wp-content/uploads/2019/09/1.-Korean-Green-Salad.jpg`}
            alt={`my-image`}
            height={340}
            width={300}
            objectFit="cover"
          />
          <p className="card-text">4k Likes </p>
          <p>Korean Green Salad</p>
        </div>
        <div className="col-12 col-lg-6 p-3 mt-3 text-center">
          <Image
            src={`https://mykoreankitchen.com/wp-content/uploads/2015/04/2.-Korean-Spicy-Cucumber-Salad.jpg`}
            alt={`my-image`}
            height={340}
            width={300}
            objectFit="cover"
          />
          <p className="card-text">4k Likes </p>
          <p>KOREAN CUCUMBER SALAD</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 p-3 mt-3 d-flex justify-content-center">
          <Dropdown>
            <Dropdown.Toggle
              className="navbar-toggle bg-color "
              variant="primary"
              id="dropdown-Basic"
            >
              View More
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Open New Page</Dropdown.Item>
              <Dropdown.Item href="#/action-2">View Here</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default BillingInfo;
