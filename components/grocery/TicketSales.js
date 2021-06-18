import 'bootstrap/dist/css/bootstrap.min.css';


const TicketSales = () => {
    return (
        <div className="card w-100% p-3">
        <h6>Most Food Delivey Buyers</h6>
        <div className="d-flex pt-2">
          <i className="bi bi-record green-text p-l-3"></i>
          <div>
            <p>Parent's</p>
            <p>78%</p>
          </div>
        </div>
        <div className="d-flex">
          <i className="bi bi-record green-text"></i>
          <div>
            <p>Teenagers</p>
            <p>48 %</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default TicketSales;
  