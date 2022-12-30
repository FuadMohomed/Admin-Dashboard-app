import React from 'react'
import './widgets.scss'
import {IoIosArrowUp} from 'react-icons/io'
import {AiOutlineUser} from 'react-icons/ai'
import {GrMoney} from 'react-icons/gr'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaBalanceScaleLeft} from 'react-icons/fa'

function Widgets({type}) {

  let data 

  const amount = 100
  const diff = 20


  switch (type) {
    case 'user':
      data={
        title:"USERS",
        isMoney:false,
        link:'view all orders',
        icon:(
          <AiOutlineUser className='icon' style={{color:'crison',
        backgroundColor:'rgba(255,0,0,0.2)'}}/>
        )
      }

      break;
  
    case 'order':
      data={
        title:"ORDERS",
        isMoney:false,
        link:'see all users',
        icon:(
          <AiOutlineShoppingCart className='icon' style={{color:'goldenrod',
        backgroundColor:'rgba(218,165,32,0.2)'}}/>
        )
      }

      break;
  
    case 'earning':
      data={
        title:"EARNINGS",
        isMoney:true,
        link:'view net earnings ',
        icon:(
          <GrMoney className='icon' style={{color:'green',
        backgroundColor:'rgba(0,128,0,0.2)'}}/>
        )
      }

      break;
  
    case 'balance':
      data={
        title:"BALANCE",
        isMoney:true,
        link:'see details',
        icon:(
          <FaBalanceScaleLeft className='icon' style={{color:'purple',
        backgroundColor:'rgba(128,0,128,0.2)'}}/>
        )
      }

      break;
  
    default:
      break;
  }

  return (
    <div className='widget'>
     <div className="left">
         <span className="title">{data.title}</span>
         <span className="counter">{data.isMoney && '$'} {amount}
         </span>
         <span className="link">{data.link}</span>
     </div>
     <div className="right">
         <div className="percentage positive">
             <IoIosArrowUp/>
             {diff}%
             </div>
             {data.icon}
     </div>
        </div>
  )
}

export default Widgets