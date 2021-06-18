
import { Line } from 'react-chartjs-2'


const LineChart = () => {
  return (
    <div className="p-3 bg-light">    
    <Line 
        data={{
          
          labels: ['Sun', 'Mon', 'Tue', 'Wen', 'Thur', 'Fri', 'Sat'],
          datasets: [
            {
              color: 'rgba(255, 99, 132, 0.2)',
              lineTension: 0.5,
              data: [300   ,440 ,340, 420, 400, 324,440],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
               
              ],
              borderWidth: 1,
            },
           
            {
            
            }
          ],
        }}
        height={200}
        width={400}
        backgroundColor="white"
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: { 
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels:  {
              fontSize: 30,
              color: 'black'
            },
          },
        }}
      />
    </div>
  )
}

export default LineChart