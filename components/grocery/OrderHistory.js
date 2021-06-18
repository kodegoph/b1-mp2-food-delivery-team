import Dropdown from 'react-bootstrap/Dropdown'
import Row from 'react-bootstrap/Dropdown'
import OrderScroll from '../cards/OrderScroll'

const OrderHistory = () => {
    return (
      <div className="card text-light h-80 p-4 p-md-3 align-top">
      <div className="d-flex justify-content-between z-index-1">
        <h4>Order history</h4>
        <div className="d-flex text-center">
          <h5 className="p-2">Order Locations</h5>
          <Dropdown className="border-radius">
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
      <div className="d-flex m-1">
        <h>$1.337</h>
        <img className="m-1" src="./images/Arrow - Down.svg" alt="" />
        <p>| This month</p>
      </div>
      <OrderScroll/>
      <Row className="d-flex justify-content-center mt-1">
        <p className="p-2">See Full history</p>
      <Dropdown>
        <Dropdown.Toggle className="navbar-toggle" variant="primary" id="dropdown-Basic">
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Open New Page</Dropdown.Item>
          <Dropdown.Item href="#/action-2">View Here</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </Row>
    
    </div>
    );
  };
  
  export default OrderHistory;
  