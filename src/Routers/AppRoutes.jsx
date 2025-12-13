import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import Index from '../Pages/Index';
import HomePage from '../Pages/HomePage';
import SignUp from '../Pages/SignUp';
import SignIn from '../Pages/SignIn';
import ForgotPassword from '../Pages/ForgotPassword';
import ResetPassword from '../Pages/ResetPassword';
import Navbar from '../Components/Navbar';

const AppRoutes = () => {
    return (
        <BrowserRouter>
      {/* Toast notifications */}
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        transition={Slide}
        theme="colored"
      />

      <Navbar />

      <Routes>
        <Route path="/" element={<Index />} /> 
        <Route path="/home-page" element={<HomePage />} /> 
        <Route path="/sign-up" element={<SignUp/>} /> 
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/forgot-password" element={<ForgotPassword />} /> 
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} /> 
      </Routes>
    </BrowserRouter>
    );
};

export default AppRoutes;