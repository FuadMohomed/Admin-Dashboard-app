import React, { useContext } from 'react'
import Home from './pages/home/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import List from './pages/list/List'
import Login from './pages/login/Login'
import NewPage from './pages/newpage/NewPage'
import SinglePage from './pages/singlepage/SinglePage'
import { productInputs, userInputs } from './FormSource'
import './components/style/dark.scss'
import { DarkModeContext } from './context/darkModeContext'

function App() {
const {darkMode} = useContext(DarkModeContext)
  
  return (
    <div className={darkMode ? 'app dark' : 'app'}>
   <BrowserRouter>
   <Routes>
     <Route path='/'>
       <Route index element={<Home />}/>
       <Route path='login' element={<Login />}/>
       <Route path='users'>
         <Route index element={<List/>}/>
         <Route path=':userId' element={<SinglePage/>}/>
         <Route path='new' element={<NewPage inputs={userInputs} title="Add New User"/>}/>
         </Route> 
       <Route path='products'>
         <Route index element={<List/>}/>
         <Route path=':productId' element={<SinglePage/>}/>
         <Route path='new' element={<NewPage inputs={productInputs} title="Add New Product"/>}/>
         </Route> 

     </Route>
  </Routes>
   </BrowserRouter>
   </div>
  )
}

export default App
