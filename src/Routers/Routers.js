import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Dashboard } from '../Pages/Dashboard/Dashboard';
import { Homepage } from '../Pages/Homepage/Homepage';

export const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/dashboard" element={<Dashboard/>} />       

    </Routes>
  )
}