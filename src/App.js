import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { PhotoCardWithQuery } from "./containers/PhotoCardWithQuery";
import { Logo } from './components/Logo'

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
            : <>
                <ListOfCategories />
                <ListOfPhotoCards categoryId={1} />
              </>
        }
    </div>
    )
}