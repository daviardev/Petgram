import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'

export const App = () => {
    const urlParams = new window.URLSearchParams(window.location.search)
    const detailID = urlParams.get('detail')
    console.log(detailID)
    //En ListOfPhotoCards podemos cambiar la categoria y cambarán segun escojamos
    return (
    <div>
        <GlobalStyle />
        <Logo />
        {
            detailID
            ? <h1>Detail Id</h1>
            : <>
                <ListOfCategories />
                <ListOfPhotoCards categoryId={3} />
              </>
        }
    </div>
    )
}