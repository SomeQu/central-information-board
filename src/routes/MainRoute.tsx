import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/main/MainPage'
import LoginPage from '../pages/login/LoginPage'
import ClientMainPage from '../client/ClientMainPage'
import AdminPage from '../pages/adminPanel/AdminPage'
import RequireAuth from '../redux/features/auth/RequireAuth'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import { BoardApi } from '../redux/boardConfiguration/apiSlice'
import ChooseBranch from '../client/ChooseBranch'

const MainRoute = () => {
  return ( 
    <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/branch' element={<ChooseBranch/>} />
        <Route path='client' element={<ClientMainPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        {/* <Route element={<RequireAuth />}> */}
          <Route path="/admin" element={<AdminPage />} />
        {/* </Route> */}
    </Routes>
  )
}

export default MainRoute