import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["00.00", "02.00", "04.00", "06.00", "08.00", "10.00"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: " #C4C4C4",
      borderColor:"rgb(53, 162, 235)",
      opacity: 0,
      data: [55, 32, 35, 13, 5, 5,],
      
    },
  ],
};

const LineChart = () => {
  return (
    <div style={{boxShadow: '',height:'100%'}}>
      <div style={{width:'100%',height:'100%',border: '0px solid red',}}>
      <Line style={{width:'300px',height:'300px',marginLeft:'30px',marginTop:'50px'}} data={data} />
      </div>

    </div>
  );
};

export default LineChart;