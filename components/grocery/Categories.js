import Modals from '../cards/Modals'

const Categories = () => {
    return (
      <div className="card bg-white text-dark p-md-3">
      <div className="card-body">Select Movie Categorie</div>
      <div className="d-flex justify-content-between px-3">
        <p>Select your favourite food menu</p>
        <Modals/>
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
          <p className="">Action</p>
        </div>
        <div className="text-center col-sm-6 col-xl-3">
          <div
            className="card bg-light border-3 m-auto"
            style={{width: '8rem', height : '8rem'}}
          ></div>
          <p className="">Action</p>
        </div>
        <div className="text-center col-sm-3 col-md-6 col-xl-3">
          <div
            className="card bg-light border-3 m-auto"
            style={{width: '8rem', height : '8rem'}}>
            </div>
          <p className="">Action</p>
        </div>
        <div className="text-center col-sm-3 col-md-6 col-xl-3">
          <div
            className="card bg-light border-3 m-auto"
            style={{width: '8rem', height : '8rem'}}
          ></div>
          <p className="">Action</p>
        </div>
      </div>
    </div>
    );
  };
  
  export default Categories;
  