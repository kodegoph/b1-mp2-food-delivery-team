import Image from 'next/image';
import Dropdown from 'react-bootstrap/Dropdown'

const BillingInfo = () => {
    return (
        <div className="card p-3 p-md-4 mb-3 rounded-3 text-center">
        
          <div className="d-flex  justify-content-lg-between row">
          <h4 className="col col-lg-12">Most Favorite Korean Food</h4>
          </div>
          <div className="container">
                <div className="row ml-auto d-flex align-items-center ">
                  <div className="col-xs-12 d-flex text-center align-items-center">
                 
                          <h6 className="p-2 cursor-pointer">Monthly</h6> 
                          <h6 className="p-2 cursor-pointer">Weekly</h6> 
                          <h6 className="p-2 cursor-pointer text-decoration-underline">Today</h6> 
                         
                  </div>
                  <div className="col-xs-2 col-md-12 col-l-6 col-xl-4 mt-3"> 
                  <div className="card m-auto bg-light border-3" style={{width: '8rem', height: '20rem'}}>
                            <Image 
                            src={`https://mykoreankitchen.com/wp-content/uploads/2020/06/2.-Korean-Ground-Beef-And-Rice-Bowls.jpg`}
                            alt={`my-image`}
                            height={400}
                            width={300}
                            objectFit='cover'
                               />
                            <div className="card-body bg-light text-center m-0">
                              <p className="card-text">267k Likes </p>
                              <div className="text-center">
                                <p>KOREAN GROUND BEEF</p>
                              </div>
                            </div>
                            </div>
                            </div>
                  <div className="col-xs-2 col-md-12 col-l-6 col-xl-4 mt-3"> 
                  
                  <div className="card m-auto bg-light border-3 cursor-pointer" style={{width: '8rem', height: '20rem'}}>
                            <Image 
                            src={`https://mykoreankitchen.com/wp-content/uploads/2020/07/9.-Air-Fryer-Korean-Chicken-Wings.jpg`}
                            alt={`my-image`}
                            height={600}
                            width={300}
                            objectFit='cover'
                               />
                            <div className="card-body bg-light text-center m-0">
                              <p className="card-text">27k Likes </p>
                              <div className="text-center">
                                <p>KOREAN CHICKEN WINGS</p>
                              </div>
                            </div>
                            </div></div>
                  <div className="col-xs-2 col-md-12 col-l-6 col-xl-4 mt-3">
                  <div className="card m-auto rounded-3 bg-light border-3" style={{width: '8rem', height: '20rem'}}>
                            <Image 
                            src={`https://mykoreankitchen.com/wp-content/uploads/2006/10/2.-Korean-Tuna-Pancakes.jpg`}
                            alt={`my-image`}
                            height={340}
                            width={300}
                            objectFit='cover'
                               />
                            <div className="card-body bg-light text-center m-0">
                              <p className="card-text">27k Likes </p>
                              <div className="text-center">
                                <p>Korean Tuna Pancakes</p>
                              </div>
                            </div>
                            </div></div>
                  </div>
                  <div className="row mt-2">
                  <div className="col-xs-2 col-md-12 col-l-6 col-xl-4 mt-3">
                  <div className="card m-auto bg-light border-3" style={{width: '8rem', height: '20rem'}}>
                            <Image 
                            src={`https://mykoreankitchen.com/wp-content/uploads/2020/04/1.-Dalgona-Coffee.jpg`}
                            alt={`my-image`}
                            height={340}
                            width={300}
                            objectFit='cover'
                               />
                            <div className="card-body bg-light text-center m-0">
                              <p className="card-text">27k Likes</p>
                              <div className="text-center">
                                <p>Dalgona Coffee</p>
                              </div>
                            </div>
                            </div>
                            </div>
                            <div className="col-xs-2 col-md-12 col-l-6 col-xl-4 mt-3"> 
                  <div className="card m-auto bg-light border-3" style={{width: '8rem', height: '20rem'}}>
                            <Image 
                            src={`https://mykoreankitchen.com/wp-content/uploads/2019/09/1.-Korean-Green-Salad.jpg`}
                            alt={`my-image`}
                            height={340}
                            width={300}
                            objectFit='cover'
                               />
                            <div className="card-body bg-light text-center m-0">
                              <p className="card-text">27k Likes </p>
                              <div className="text-center">
                                <p>Korean Green Salad</p>
                              </div>
                            </div>
                            </div>
                            </div>
                            <div className="col-xs-2 col-md-12 col-l-6 col-xl-4 mt-3">
                  <div className="card m-auto bg-light border-3 " style={{width: '8rem', height: '20rem'}}>
                            <Image 
                            src={`https://mykoreankitchen.com/wp-content/uploads/2018/12/0.-Bulgogi-Korean-BBQ-Beef.jpg`}
                            alt={`my-image`}
                            height={340}
                            width={300}
                            objectFit='cover'
                               />
                            <div className="card-body bg-light text-center m-0">
                              <p className="card-text">27k Likes </p>
                              <div className="text-center">
                                <p>Korean Green Salad</p>
                              </div>
                            </div>
                            </div></div>

                </div>
              </div>

          <div className="row d-flex justify-content-center">
          <Dropdown>
              <Dropdown.Toggle className="navbar-toggle m-4" variant="primary" id="dropdown-Basic">
                View More
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Open New Page</Dropdown.Item>
                <Dropdown.Item href="#/action-2">View Here</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </div>
          </div>
         
    );
  };
  
  export default BillingInfo;
  