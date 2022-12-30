import React from 'react'
import './featuredchart.scss'
import {BiDotsVertical} from 'react-icons/bi'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {AiOutlineArrowUp} from 'react-icons/ai'
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

function FeaturedChart() {
  return (
    <div className='featured'>
      <div className="top">
        <h1 className="titile">Total Revenue</h1>
        <BiDotsVertical fontSize="small" className='icon'/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text='70%' strokeWidth={5} />
         </div>
         <p className="title">Total sales made today</p>
         <p className="amount">$420</p>
         <p className="desc">Previos transactions proccessing. Last payments may not be included.
         </p>
         <div className="summary">
           <div className="item">
             <div className="itemTitle">Target</div>
             <div className="itemResult negative">
               <AiOutlineArrowDown fontSize='small'/>
               <div className="resultAmount">$12.4k</div>
             </div>
           </div>
           <div className="item">
             <div className="itemTitle">Last Week</div>
             <div className="itemResult positive">
               <AiOutlineArrowUp fontSize='small'/>
               <div className="resultAmount">$12.4k</div>
             </div>
           </div>
           <div className="item">
             <div className="itemTitle"> Last Month</div>
             <div className="itemResult positive">
               <AiOutlineArrowUp fontSize='small'/>
               <div className="resultAmount">$12.4k</div>
             </div>
           </div>
         </div>
      </div>
      </div>
  )
}

export default FeaturedChart