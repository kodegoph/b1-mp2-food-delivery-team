import { height, width } from "@material-ui/system";

const BestSelling = () => {
    return (
      <div className="col col-sm-12 col-md-4 container-fluid ">
      <div className="card bg-color text-dark p-4 p-md-4  mb-3
      ">
      <div className="d-flex">
         
        
          <h4 className="text-light">Best Selling</h4>
      
        <img src="./images/two dots.svg" alt="" />
      </div>
      <h6 className="text-light">Trend 2021</h6>
      <div
        className="card bg-light border-3 rounded"
        style={{width: '100', height : '6rem', maxwidth:'120' }}
      ></div>
      <h5 className="m-3 text-light">Billing Information</h5>
      <div className="d-flex justify-content-between">
        <a
          href="#"
          className="btn btn-primary btn-sm disabled h-75"
          role="button"
          aria-disabled="true"
          >81 Sell</a
        >
        <div className="d-flex">
          <img className="pb-3"  
           src="..///../public/assets/images/Vector_14.svg" alt="" />
          <p className="text-light">29%</p>
        </div>
      </div>
    </div>
    </div>   
    );
  };
  
  export default BestSelling;
  