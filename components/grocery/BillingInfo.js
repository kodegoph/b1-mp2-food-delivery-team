const BillingInfo = () => {
    return (
        <div className="card p-4 p-md-4 mb-3">
        
          <div className="d-flex  justify-content-lg-between">
          <h5>Most Favorite Korean Food</h5>
          
          <div className="d-flex pt-4 ">
               <h6 className="p-2 cursor-pointer">Monthly</h6> 
               <h6 className="p-2 cursor-pointer">Weekly</h6> 
               <h6 className="p-2 cursor-pointer text-decoration-underline">Today</h6> 
          </div>
          </div>
          <div className="container">
                <div className="row ml-auto d-flex align-items-center ">
                  <div className="col-xs-12">Whatever you want full row</div>
                  <div className="col-xs-2 col-md-6 col-xl-4 mt-3"> 
                  <div className="card m-auto" style={{width: '8rem'}}>
                            <img className="card-img-top" src="http://lorempixel.com/100/150/food/Dummy-Text" alt="Card image cap"/>
                            <div className="card-body">
                              <p className="card-text">hehe</p>
                              <div className="text-center">
                                <p>267k Likes it</p>
                              </div>
                            </div>
                            </div></div>
                  <div className="col-xs-2 col-md-6 col-xl-4 mt-3"> <div className="card m-auto" style={{width: '8rem'}}>
                            <img className="card-img-top" src="http://lorempixel.com/100/150/food/Dummy-Text" alt="Card image cap"/>
                            <div className="card-body">
                              <p className="card-text">hehe</p>
                              <div className="text-center">
                                <p>267k Likes it</p>
                              </div>
                            </div>
                            </div></div>
                  <div className="col-xs-2 col-md-6 col-xl-4 mt-3"> <div className="card m-auto" style={{width: '8rem'}}>
                            <img className="card-img-top" src="http://lorempixel.com/100/150/food/Dummy-Text" alt="Card image cap"/>
                            <div className="card-body">
                              <p className="card-text">hehe</p>
                              <div className="text-center">
                                <p>267k Likes it</p>
                              </div>
                            </div>
                            </div></div>
                  </div>
                  <div className="row">
                  <div className="col-xs-2 col-md-6 col-xl-4 mt-3"> <div className="card m-auto" style={{width: '8rem'}}>
                            <img className="card-img-top" src="http://lorempixel.com/100/150/food/Dummy-Text" alt="Card image cap"/>
                            <div className="card-body">
                              <p className="card-text">hehe</p>
                              <div className="text-center">
                                <p>267k Likes it</p>
                              </div>
                            </div>
                            </div></div>
                  <div className="col-xs-2 col-md-6 col-xl-4 mt-3"> <div className="card m-auto" style={{width: '8rem'}}>
                            <img className="card-img-top" src="http://lorempixel.com/100/150/food/Dummy-Text" alt="Card image cap"/>
                            <div className="card-body">
                              <p className="card-text">hehe</p>
                              <div className="text-center">
                                <p>267k Likes it</p>
                              </div>
                            </div>
                            </div></div>
                  <div className="col-xs-2 col-md-6 col-xl-4 mt-3"> <div className="card m-auto" style={{width: '8rem'}}>
                            <img className="card-img-top" src="http://lorempixel.com/100/150/food/Dummy-Text" alt="Card image cap"/>
                            <div className="card-body">
                              <p className="card-text">hehe</p>
                              <div className="text-center">
                                <p>267k Likes it</p>
                              </div>
                            </div>
                            </div></div>

                </div>
              </div>

          <div className="row">
             <div className="dropdown show  d-flex justify-content-center mt-1">
              <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               View More
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
            </div>
          </div>
         
    );
  };
  
  export default BillingInfo;
  