import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widgets from '../../components/widgets/Widgets'
import Chart from '../../components/charts/Chart'
import FeaturedChart from '../../components/featured/FeaturedChart'
import Transaction from '../../components/transaction/Transaction'
import './home.scss'



function Home() {
  return <>
   <div className="home">
     <Sidebar/>
   <div className="homeContainer">
    <Navbar/>
    <div className="widgets">
    <Widgets type='user'/>
    <Widgets type='order'/>
    <Widgets type='earning'/>
    <Widgets type='balance'/>
     </div>
     <div className="charts">
      <FeaturedChart/>
      <Chart title='Last 6 Months (Revenue' aspect={2/1}/>
     </div>
     <div className="listContainer">
      <div className="listTitle">Latest Transactions</div>
     <Transaction/>
     </div>
     </div>
   </div>
  </>
}

export default Home

