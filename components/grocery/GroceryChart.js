import LineChart from  '../cards/Chartdash'

const GroceryChart = () => {
  return (
           <>
          <div className="card h-100">
        <div className="card-header">
        <span className="me-2"><i className="bi bi-bar-chart-fill"></i></span>
                Area Chart Example
               
           </div>
           <LineChart/>
           </div>
          </>
      );
};

export default GroceryChart;      