import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Layouts/Header/Header'

export const Dashboard = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}
