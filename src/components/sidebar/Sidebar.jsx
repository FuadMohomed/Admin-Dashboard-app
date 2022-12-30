import React, { useContext } from 'react'
import './sidebar.scss'
import {MdDashboard} from 'react-icons/md'
import {FaUsers} from 'react-icons/fa'
import {MdOutlineProductionQuantityLimits} from 'react-icons/md'
import {GoListUnordered} from 'react-icons/go'
import {TbTruckDelivery} from 'react-icons/tb'
import {ImStatsBars2} from 'react-icons/im'
import {AiOutlineNotification} from 'react-icons/ai'
import {MdOutlineSettingsSystemDaydream} from 'react-icons/md'
import {SiLogstash} from 'react-icons/si'
import {CiSettings} from 'react-icons/ci'
import {CgProfile} from 'react-icons/cg'
import {BiLogOut} from 'react-icons/bi'
import {Link} from 'react-router-dom'
import { DarkModeContext } from '../../context/darkModeContext'

function Sidebar() {
  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className='sidebar'>
   <div className="top">
     <Link to='/' style={{textDecoration:'none'}}>
<span className='logo'>Fuad/Admin</span>
     </Link>
   </div>
   <hr/>
   <div className="center">
     <ul>
       <p className="title">MAIN</p>
         
       <li>
         <MdDashboard className='icon'/>
         <span>Dashboard</span>
       </li>
  
       <p className="title">LIST</p>
         <Link to='/users' style={{textDecoration:'none'}}>
       <li>
         <FaUsers className='icon'/>
         <span>Users</span>
       </li>
     </Link>
       <Link to='/products' style={{textDecoration:'none'}}>
       <li>
         <MdOutlineProductionQuantityLimits className='icon'/>
         <span>Products</span>
       </li>
     </Link>
       <li>
         <GoListUnordered className='icon'/>
         <span>Orders</span>
       </li>
       <li>
         <TbTruckDelivery className='icon'/>
         <span>Delivery</span>
       </li>
       <p className="title">USEFUL</p>
       <li>
         <ImStatsBars2 className='icon'/>
         <span>Stats</span>
       </li>
       <li>
         <AiOutlineNotification className='icon'/>
         <span>Notifications</span>
       </li>
       <p className="title">SERVICE</p>
       <li>
         <MdOutlineSettingsSystemDaydream className='icon'/>
         <span>System Health</span>
       </li>
       <li>
         <SiLogstash className='icon'/>
         <span>Logs</span>
       </li>
       <li>
         <CiSettings className='icon'/>
         <span>Settings</span>
       </li>
       <p className="title">USER</p>
       <li>
         <CgProfile className='icon'/>
         <span>Profile</span>
       </li>
       <li>
         <BiLogOut className='icon'/>
         <span>LogOut</span>
       </li>
     </ul>
     </div>
   <div className="bottom">
   <div className="colorOption" onClick={() => dispatch({type:'LIGHT'})}></div>
   <div className="colorOption" onClick={() => dispatch({type:'DARK'})}></div>
  
   </div>
    </div>
  )
}

export default Sidebar