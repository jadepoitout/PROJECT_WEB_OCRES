import './Widget1.css';
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: ['60', '62', '68', '70', '73', '75', '76', '74', '70', '68', '66', '65'],
        borderColor: 'rgba(223, 147, 59)',
        backgroundColor: 'rgba(223, 147, 59,0.8)',
      },
    ],
  };


class Widget6 extends React.Component {
    render() {
        return (
            <div className="widget6">
    
    <Line options={options} data={data} />
            </div>
    

        );
        }
    }
    
    export default Widget6;