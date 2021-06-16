import Dropdown from 'react-bootstrap/Dropdown'
import Row from 'react-bootstrap/Dropdown'
import OrderScroll from '../cards/OrderScroll'

const OrderHistory = () => {
    return (
      <div className="card text-dark h-80 p-5 align-top">
      <div className="d-flex justify-content-between">
        <h3>Order history</h3>
        <div className="d-flex text-center">
          <h5 className="m-2">Order Locations</h5>
          <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-Basic">
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">All Places</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Caloocan</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Malabon</Dropdown.Item>
          <Dropdown.Item href="#/action-1">Navotas</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Quezon City</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Marikina</Dropdown.Item>
          <Dropdown.Item href="#/action-1">Pasig</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Taguig</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Makati</Dropdown.Item>
          <Dropdown.Item href="#/action-1">Manila</Dropdown.Item>
          <Dropdown.Item href="#/action-2">San Juan</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Pasay</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Parañaque</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Las Piñas</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Muntinlupa</Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
        </div>
      </div>
      <div className="d-flex m-2">
        <h5>$1.337</h5>
        <img className="m-1" src="./images/Arrow - Down.svg" alt="" />
        <p>| This month</p>
      </div>
      <ul className="list-group mt-4">
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
              style={{width: '60px', height : '60px'}}
            />
            <div style={{paddingLeft: '0', margin : '10px'}}>
              <span>Cau  Africa</span>
              <p>Number Order #1510031<br /></p>
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
              
              style={{width: '60px', height : '60px'}}
            />
            <div className="pd-0 m-pd-5">
              <span>Cau  Africa</span>
              <p>Number Order #1510031<br /></p>
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
              
              style={{width: '60px', height : '60px'}}
            />
            <div className="pd-0 m-pd-5">
              <span>Cau  Africa</span>
              <p>Number Order #1510031<br /></p>
            </div>
          </div>
          <div>
            <h6>$19.89</h6>
          </div>
        </li>
      </ul>
      <Row className="d-flex justify-content-center mt-4">
        <p className="p-2">See Full history</p>
      <Dropdown>
        <Dropdown.Toggle variant="danger" id="dropdown-Basic">
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Open New Page</Dropdown.Item>
          <Dropdown.Item href="#/action-2">View Here</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </Row>
      <OrderScroll/>
    </div>
    );
  };
  
  export default OrderHistory;
  