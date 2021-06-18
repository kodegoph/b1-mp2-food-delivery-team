import LineChart from  '../cards/Chartdash'

const GroceryChart = () => {
  return (
           <>
          <div className="card h-100 p-0">
        <div className="card-header m-auto">
        <span className=""></span>
                <h5>Sales for this Week</h5>
               
           </div>
           <LineChart/>
           </div>
          </>
      );
};

export default GroceryChart;      