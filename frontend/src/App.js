import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Reg from './Reg'
import Logout from './Logout'
import Cart from './Cart'
import Updprod from './updprod'
import Addprod from './Addprod'
import Nav from './Nav'
import './App.css'
import Ct from './Ct'
import Km from './Km'
import Fpwd from './Fpwd'

const App = () => {
  let [usercon,setusercon]=useState({"_id":"","name":"","token":"","role":""})
  let updcont=(obj)=>{
    setusercon({...usercon,...obj})
  }
  let obj={"usercon":usercon,"updcon":updcont}
  return (<BrowserRouter>
  <Ct.Provider value={obj}>
  <Nav/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/reg" element={<Reg/>}/>
    <Route path='/logout' element={<Logout/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path="/upd" element={<Updprod/>}/>
    <Route path='/addprod' element={<Addprod/>}/>
    <Route path='/km' element={<Km/>}/>
    <Route path='/fpwd' element={<Fpwd/>}/>

  </Routes>
  </Ct.Provider>
  
  </BrowserRouter>
    
  )
}

export default App
