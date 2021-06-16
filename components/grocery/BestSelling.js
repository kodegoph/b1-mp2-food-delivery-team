const BestSelling = () => {
    return (
      <div className="card bg-white text-dark px-4 p-3">
      <div className="d-flex">
         
        <div className="card-body">
          <h5>Best Selling</h5>
        </div>
        <img src="./images/two dots.svg" alt="" />
      </div>
      <p className="mg-0">Trend 2021</p>
      <div
        className="card bg-light border-3 rounded"
        style={{width: '100%', height : '6rem'}}
      ></div>
      <h6>Billing Information</h6>
      <div className="d-flex justify-content-between">
        <a
          href="#"
          className="btn btn-primary btn-sm disabled h-75"
          role="button"
          aria-disabled="true"
          >81 Sell</a
        >
        <div className="d-flex">
          <img className="pb-3" src="./images/Vector 14.svg" alt="" />
          <p className="text-success">29%</p>
        </div>
      </div>
    </div>
    );
  };
  
  export default BestSelling;
  