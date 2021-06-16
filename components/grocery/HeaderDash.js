import Button from 'react-bootstrap/Button'

const HeaderDash = () => {
    return (
      <div className="row row-fluid gx-3 pt-5 pt-lg-3">
             <div className="col-md-5 mb-3 px-3">
            <h2 className="text-bold text-light">Go-Groceries</h2>
          </div>
          <div className="col-md-3 mb-6 px-3">
            <div className="input-group pb-4">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Button className="btn btn-primary" type="submit">
              <i class="fas fa-search"></i>
              </Button>
            </div>
          </div>
        </div>
    );
};
  
export default HeaderDash;
  