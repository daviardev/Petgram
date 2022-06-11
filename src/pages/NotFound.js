import React from "react";
import { Tittle, Body, Button, P, H4 } from "../styles/styles";

export const NotFound = () => {
    return <Body>
    
        <Tittle>Error 404</Tittle>
        <H4>Opps! la página no ha sido encontrada</H4>
        <P>La página que estás buscando no existe. Revisa que estés en la dirección correcta</P>
        <Button path='/'>Volver al inicio</Button>
    </Body>
    
     
}