import React from 'react'
import './navbar.scss'
import {BsSearch} from 'react-icons/bs'
import {GrLanguage} from 'react-icons/gr'
import {MdDarkMode} from 'react-icons/md'
import {BiExitFullscreen} from 'react-icons/bi'
import {AiOutlineBell} from 'react-icons/ai'
import {BsChatLeft} from 'react-icons/bs'
import {BsListStars} from 'react-icons/bs'
import pic1 from '../../pics/pic1.jpg'
  import { DarkModeContext } from '../../context/darkModeContext'
  import {useContext} from 'react'


function Navbar() {
  const {dispatch} = useContext(DarkModeContext)
  return (
   <div className="navbar">
     <div className="wrapper">
       <div className="search">
         <input type='text' placeholder='Search..'  />
         <BsSearch className='icon'/>
          </div>
          <div className="items">
          <div className="item">
            <GrLanguage/>
            English
          </div>
         
          <div className="item">
            <MdDarkMode className='icon' onClick={() => dispatch({type:'TOGGLE'})}/>
            
          </div>
          <div className="item">
            <BiExitFullscreen className='icon'/>
            
          </div>
          <div className="item">
            <AiOutlineBell className='icon'/>
            <div className="counter">1</div>
            
          </div>
          <div className="item">
            <BsChatLeft className='icon'/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <BsListStars className='icon'/>
            
          </div>
          <div className="item">
           <img 
           src={pic1}
            alt="pic"
            className='avatar' />
            
          </div>
          </div>
      </div>
   </div>
  )
}

export default Navbar