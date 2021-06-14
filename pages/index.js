const Home = () => {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-2 row-cols-xxl-4">
          <div className="col">
            <div className="card radius-10 bg-gradient-cosmic">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="me-auto">
                    <p className="mb-0 text-white">Total Orders</p>
                    <h4 className="my-1 text-white">4805</h4>
                    <p className="mb-0 font-13 text-white">
                      +2.5% from last week
                    </p>
                  </div>
                  <div id="chart1"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card radius-10 bg-gradient-ibiza">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="me-auto">
                    <p className="mb-0 text-white">Total Revenue</p>
                    <h4 className="my-1 text-white">$84,245</h4>
                    <p className="mb-0 font-13 text-white">
                      +5.4% from last week
                    </p>
                  </div>
                  <div id="chart2"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card radius-10 bg-gradient-ohhappiness">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="me-auto">
                    <p className="mb-0 text-white">Bounce Rate</p>
                    <h4 className="my-1 text-white">34.6%</h4>
                    <p className="mb-0 font-13 text-white">
                      -4.5% from last week
                    </p>
                  </div>
                  <div id="chart3"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card radius-10 bg-gradient-kyoto">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="me-auto">
                    <p className="mb-0 text-dark">Total Customers</p>
                    <h4 className="my-1 text-dark">8.4K</h4>
                    <p className="mb-0 font-13 text-dark">
                      +8.4% from last week
                    </p>
                  </div>
                  <div id="chart4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
