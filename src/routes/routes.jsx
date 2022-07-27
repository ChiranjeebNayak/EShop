import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/home';
import Contact from '../pages/contact';
import NoPage from '../pages/noPage';
import Landing from '../pages/landing';
import Register from '../pages/register';
import Cart from '../pages/cart';
import Profile from '../pages/profile';
function routes() {
    const user=true;
    return (
        <BrowserRouter>
            <Routes>
                (!{user}) ? 
                <Route path="/" element={<Landing/>} />
                <Route path="/register" element={<Register/>} />
                 :
                <Route path='home' element={<Home/>} />
                <Route path="contact" element={<Contact/>} />
                <Route path="profile" element={<Profile/>} />
                <Route path="cart" element={<Cart/>} />
                <Route path="*" element={<NoPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default routes