import Modals from '../cards/Modals'

const Categories = () => {
    return (
      <div className="card text-light p-md-4 p-sm-1  border-radius-lg">
      <h4 className="px-3">Select Food Categories</h4>
      <div className="d-flex justify-content-between  px-3 row">
        <h6 className=" col-sm-6">Select your favourite food menu</h6>
        <div className=" col-md-6 col-xl-3">
        <Modals/>
        </div>
      </div>
      <div
        className="
          px-3
          d-flex
          row
          align-items-center
          justify-content-center
        "
      >
        <div className="text-center col-sm-6 col-xl-3">
          <div
            className="card bg-light border-3 pd-3 m-auto"
            style={{width: '8rem', height : '8rem'}}
          ></div>
          <p className="">Bulgogi</p>
        </div>
        <div className="text-center col-sm-6 col-xl-3">
          <div
            className="card bg-light border-3 m-auto"
            style={{width: '8rem', height : '8rem'}}
          ></div>
          <p className="">Samgyeopsal</p>
        </div>
        <div className="text-center col-sm-6 col-xl-3">
          <div
            className="card bg-light border-3 m-auto"
            style={{width: '8rem', height : '8rem'}}>
            </div>
          <p className="">Ddukbokki</p>
        </div>
        <div className="text-center col-sm-6 col-xl-3">
          <div
            className="card bg-light border-3 m-auto"
            style={{width: '8rem', height : '8rem'}}
          ></div>
          <p className="">Bibimbap</p>
        </div>
      </div>
      </div>
    
    );
  };
  
  export default Categories;
  