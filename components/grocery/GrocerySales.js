const GrocerySales = () => {
    return (
        <div className="card w-100% p-3 p-md-3">
        <div className="d-flex">
          <div
            className="card bg-light border-3 "
            style={{width: '80px', height : '60px'}}
          ></div>
          <div className="card border-0">
            <h6 className="m-2">Most Branch Sales</h6>
          </div>
        </div>
        <p className="m-3 pt-3">Caloocan Branch</p>
        <div className="d-flex justify-content-between align-content-center">
          <div className="progress" style={{width : '100px', height : '5px'}}>
            <div style={{width: '50%'}} className="progress-bar"></div>
          </div>
          
        </div>
        <p className="m-3">Pasay Branch</p>
        <div className="d-flex justify-content-between">
          <div className="progress" style={{width : '100px', height : '5px'}}>
            <div style={{width: '78%'}} className="progress-bar"></div>
          </div>

        </div>
      </div>
    );
  };
  
  export default GrocerySales;
  