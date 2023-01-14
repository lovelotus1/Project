// ./components/PieChart.js
import React from "react";
import "../Piechart/piechart.css"
import { Doughnut, } from "react-chartjs-2";


const data = {
  labels: [
  ],
  datasets: [
    {
      data: [300, 50, 100, 20],
      width: '50px',
      backgroundColor: [
        ' #5CE3B5',
        '#6CC0ED',
        '#FDCC55',
        '#EB5971'
      ],
      borderColor: [
        ' #5CE3B5',
        '#6CC0ED',
        '#FDCC55',
        '#EB5971',
      ],
      borderWidth: 1,
    },
  ],
};
const PieChart = () => {
  return (
    <div className="header">
      <div style={{ width: '50%' }}>
        <div>
          <h4 style={{ marginLeft: '15px' }}>Fleet Charge Status</h4>
        </div>
        <div style={{ width: "150px", height: "150px", marginLeft: '0px' }}>
          <Doughnut style={{ marginTop: '90px', marginLeft: '20px', width: "150px", height: "150px" }} data={data} />
        </div>
      </div>
      <div style={{ border: ' 0px solid black', display: 'flex', flexDirection: 'column', width: '50%', height: '100%' }}>
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', marginLeft: '110px' }}>
          <img style={{ border: ' 0px solid black', marginLeft: '10px', marginTop: 'px', width: '20%', height: '20px' }} src="assets/Download (1).svg" />
          <img style={{ border: ' 0px solid black', marginLeft: '10px', marginTop: '0px', width: '30%', height: '20px' }} src="assets/Vector (4).svg" />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', marginTop: '30px',marginLeft: '20px' }}>
          <div style={{
            background: '#3E9DCF',
            width: '80px',
            height: "25px",
            borderRadius: '10px 0 0px 10px ',
            border: '1px solid blue',
            color: 'whitesmoke',
            alignItems:'center',
            textAlign:'center',
          }}>Chart</div>
          <div style={{
            width: '80px',
            height: "25px",
            color: "blue",
            alignItems:'center',
            textAlign:'center',
            textJustify: 'inherit',
            border: '1px solid blue',
            borderRadius: '0px 10px 10px 0px '
          }}>Table</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row',marginTop: '-20px' }}>
          <img style={{ width: '20px', height: '20px', marginTop: '80px' }} src="assets/Battery 1 (1).svg" />
          <small style={{ marginLeft: '10px', marginTop: '80px', fontWeight: 'bold' }}> >75% </small>
          <small style={{ marginLeft: '60px', marginTop: '80px', fontWeight: 'bold' }}> 437 </small>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <img style={{ width: '20px', height: '20px', marginTop: '5px' }} src="assets/Battery 1 (1).svg" />
          <small style={{ marginLeft: '10px', marginTop: '5px', fontWeight: 'bold' }}> >75% </small>
          <small style={{ marginLeft: '60px', marginTop: '5px', fontWeight: 'bold' }}> 437 </small>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <img style={{ width: '20px', height: '20px', marginTop: '5px' }} src="assets/Battery 1 (1).svg" />
          <small style={{ marginLeft: '10px', marginTop: '5px', fontWeight: 'bold' }}> >75% </small>
          <small style={{ marginLeft: '60px', marginTop: '5px', fontWeight: 'bold' }}> 437 </small>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <img style={{ width: '20px', height: '20px', marginTop: '5px' }} src="assets/Battery 1 (1).svg" />
          <small style={{ marginLeft: '10px', marginTop: '5px', fontWeight: 'bold' }}> >75% </small>
          <small style={{ marginLeft: '60px', marginTop: '5px', fontWeight: 'bold' }}> 437 </small>
        </div>
      </div>


    </div >
  );
};
export default PieChart;