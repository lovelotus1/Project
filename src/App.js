import React from 'react'
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import PieChart from "./components/Piechart/PieChart";
import Header from "./components/Header/header";
import Charger from './components/charger/charger';
import Dasboard from './components/Dashboard/dasboard';



function App() {
  return (
    <div>
      {/* <Header/>
      <LineChart/>
      <BarChart/>
      <PieChart/>
      <Charger/> */}
      <Header/>
      <Dasboard/>
      {/* <PieChart/> */}
    </div>
  );
}

export default App;
