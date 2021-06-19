import LineChart from  '../cards/Chartdash'

const GroceryChart = () => {
  return (
           <>
          <div className="card p-3">
                <h5>Sales for this Week</h5>
           <LineChart/>
           </div>
          </>
      );
};

export default GroceryChart;      