// ./components/BarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const labels = ["0-10%", "10-50%", "50-100%", "100-150%", ">150%",];
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Fully Rounded',
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [15, 80, 25, 52, 20, 30, 45],
        borderRadius: 25,
        barPercentage: 0.3,
        tickLength: '8px',
        tickWidth: 1,
        borderSkipped: false,
        borderWidth: 1,
      },
    ],
  };
  return (
    <div style={{ marginLeft: '23px', height: '50%' }} >
      <div style={{ display: 'flex', flexDirection: 'coulmn', border: '0px solid blue' }}>
        <div className="headerchild">
          <h3 style={{ marginLeft: '6px' }}>Charging Utilization</h3>
          <img style={{ marginLeft: '300px' }} src="assets/Download (1).svg" />
          <img style={{ marginLeft: '15px' }} src="assets/Vector (4).svg" />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{
          background: '#3E9DCF',
          width: '120px',
          height: "25px",
          borderRadius: '10px 0 0px 10px ',
          border: '1px solid blue',
          color: 'whitesmoke',
          alignItems: 'center',
          textAlign: 'center',

        }}>Charge used</div>
        <div style={{
          width: '120px',
          height: "25px",
          color: "blue",
          textJustify: 'inherit',
          border: '1px solid blue',
          borderRadius: '0px 10px 10px 0px ',
          alignItems: 'center',
          textAlign: 'center',

        }}>Distance</div>
      </div>
      <div style={{ width: '350.64px', height: "300px", }}>
        <Bar style={{ boarderRadius: '10px' }} data={data} />
      </div>

    </div>
  );
};

export default BarChart;