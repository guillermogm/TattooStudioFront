import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../Home/Home'
import { NotFound } from '../NotFound/NotFound'
import { Register } from '../Register/Register'
import { Login } from '../Login/Login'
import { Services } from '../Services/Services'
import { Profile } from '../Profile/Profile'
import { Users } from '../Users/Users'

export const Body = () => {
  const fullToken = JSON.parse(localStorage.getItem("fullToken"))
  let role= null
  if(fullToken){
     role = fullToken.tokenData.roleId
  }
  return (
    <>
    <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/services" element={<Services/>}/>
        {fullToken && <Route path='/profile' element={<Profile />} />}
        {role == "3" && <Route path='/users' element={<Users />} />}
    </Routes>
    </>
  )
}