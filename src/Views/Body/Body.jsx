import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../Home/Home'
import { NotFound } from '../NotFound/NotFound'
import { Register } from '../Register/Register'
import { Login } from '../Login/Login'
import { Services } from '../Services/Services'
import { Profile } from '../Profile/Profile'

export const Body = () => {
  return (
    <>
    <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </>
  )
}