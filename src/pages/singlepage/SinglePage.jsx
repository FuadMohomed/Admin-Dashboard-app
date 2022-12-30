import React from 'react'
import './singlepage.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

import Chart from "../../components/charts/Chart"
import Transaction from '../../components/transaction/Transaction'

function SinglePage() {
  return (
    <div className='singlePage'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
       <div className="top">
            <div className="left">
                <div className="editButton">
                    Edit 

                </div>
                <h1 className="title">Information</h1>
                <div className="item">
                    <img 
                    src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-1.2.1&dl=sigmund-a19OVaa2rzA-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb" 
                    alt="pic" className="itemImg"
                     />
                     <div className="details">
                         <h1 className="itemTitle">Jane Doe</h1>
                         <div className="detailItem">
                             <span className="itemKey">Email:</span>
                             <span className="itemValue">JaneDoe@gmail.com:</span>
                         </div>
                         <div className="detailItem">
                             <span className="itemKey">Phone:</span>
                             <span className="itemValue">+1 5642 28 28:</span>
                         </div>
                         <div className="detailItem">
                             <span className="itemKey">Address:</span>
                             <span className="itemValue">Elton st. 324 garden yd NewYork:</span>
                         </div>
                         <div className="detailItem">
                             <span className="itemKey">County:</span>
                             <span className="itemValue">USA:</span>
                         </div>
                     </div>
                </div>
               </div>
            <div className="right">
              <Chart className='chart'  aspect={3/1} title='User Spending (Last 6 Months)'/>
            </div>
        </div>


        <div className="bottom">
          <h1 className="title">Latest Transactions</h1>
          <Transaction/>
        </div>

      </div>
      </div>
  )
}

export default SinglePage