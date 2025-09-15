import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Component/NavBar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ContactFooter from '../Component/ContactFooter'

const MainLayout = () => {
  return (
    <>
      <ToastContainer/>
      <NavBar />
      <Outlet/>
      <ContactFooter />
    </>
  )
}

export default MainLayout