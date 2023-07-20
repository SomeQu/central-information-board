import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/main/MainPage'
import LoginPage from '../pages/login/LoginPage'
import ClientMainPage from '../client/ClientMainPage'

const MainRoute = () => {
  return ( 
    <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='client' element={<ClientMainPage/>}/>
    </Routes>
  )
}

export default MainRoute