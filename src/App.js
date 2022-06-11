import React, { useContext } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from './components/Logo'
import { Context } from "./Context";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { NotFound } from "./pages/NotFound";

import { NavBar } from "./components/Navbar";


export const App = () => {
    const { isAuth } = useContext(Context)

    return (
        <>
            <BrowserRouter>
            <div>
                <GlobalStyle />
                <Logo />
                <Routes>
                    <Route path='/' element={<Home />} /> 
                    <Route path='/pet/:id' element={<Home />} />
                    <Route path='/detail/:detailId' element={<Detail />} />
                    <Route path='/favs' element={isAuth ? <Favs /> : <Navigate replace to={'/login'} />} />
                    <Route path='/user' element={isAuth ? <User /> : <Navigate replace to={'/login'} />} />
                    <Route path='/login' element={!isAuth ? <NotRegisteredUser /> : <Navigate replace to='/' />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <NavBar />
            </div>
        </BrowserRouter>
      </>
    )
}