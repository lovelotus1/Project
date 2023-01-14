import React from 'react'
import BarChart from '../BarChart'
import LineChart from '../LineChart'
import PieChart from '../Piechart/PieChart'
import "../Dashboard/dashboard.css"
import Sidenav from '../SideNav/sidenav'
import Plug from '../Plug/plug'
import Paper from '@mui/material/Paper';
export default function Dasboard() {
  return (
    <Paper elevation={0} style={{ position:'relative', display: 'flex', flexDirection: 'coulmn',flexWrap:'wrap', border: '0px solid red', width: '100vw', height: '100vh',justifyContent:'space-around' }}>
      <div>
        <Sidenav />
      </div>
      <Paper elevation={3} style={{marginLeft:'0px',width:'400px',height:'300px',border:'0px solid grey'}}>
      <PieChart/>
      </Paper>
      <Paper elevation={3} style={{width:'400px',height:'300px',border:'0px solid grey'}}>
      <Plug/>
      </Paper>
      <Paper elevation={3} style={{width:'400px',height:'300px',border:'0px solid grey'}}>
      <PieChart/>
      </Paper >
      <Paper elevation={3} style={{  marginLeft: '85px',width:'400px',height:'300px',border:'0px solid grey'}}>
      <Plug/>
      </Paper >
      <Paper elevation={3}style={{width:'400px',height:'300px',border:'0px solid grey'}}>
      <LineChart/>
      </Paper >
      <Paper elevation={3}style={{width:'400px',height:'300px',border:'0px solid grey'}}>
      <BarChart/>
      </Paper >
      

    </Paper>
  )
}
