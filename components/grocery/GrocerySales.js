const GrocerySales = () => {
    return (
        <div className="card w-100% p-3">
        <div className="d-flex">
          <div
            className="card bg-light border-3 "
            style={{width: '80px', height : '60px'}}
          ></div>
          <div className="card bg-white border-0 text-center">
            <h6 className="m-2">Ticketing Sells</h6>
          </div>
        </div>
        <p className="m-3">This Month</p>
        <div className="d-flex justify-content-between align-content-center">
          <div className="progress" style={{width : '100px', height : '5px'}}>
            <div style={{width: '50%'}} className="progress-bar"></div>
          </div>
          <p className="">$141</p>
        </div>
        <p>Last Month</p>
        <div className="d-flex justify-content-between align-content-center">
          <div className="progress" style={{width : '100px', height : '5px'}}>
            <div style={{width: '78%'}} className="progress-bar"></div>
          </div>
          <p className="">$241</p>
        </div>
      </div>
    );
  };
  
  export default GrocerySales;
  