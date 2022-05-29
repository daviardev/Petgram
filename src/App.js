import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { PhotoCardWithQuery } from "./containers/PhotoCardWithQuery";
import { Logo } from './components/Logo'
import { Home } from "./pages/Home";
import { Router } from "@reach/router";

export const App = () => {
    const urlParams = new window.URLSearchParams(window.location.search)
    const detailID = urlParams.get('detail')
    //En ListOfPhotoCards podemos cambiar la categoria y cambarán segun escojamos
    return (
    <div>
        <GlobalStyle />
        <Logo />
        {
            detailID
            ? <PhotoCardWithQuery id={detailID} />
            : <Router>
                <Home path='/' />
                <Home path='/pet/:id' />
            </Router>
        }
    </div>
    )
}