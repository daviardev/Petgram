import React, { createContext, useState } from 'react'
export const Context = createContext()

const Provider = ({ children }) => {
//En caso sea true, dejará entrar a Favs y User sí no, no dejará entrar y pedirá registro de usuario
    const [isAuth, setIsAuth] = useState(() => {
        return window.sessionStorage.getItem('token')
    })

    const value = {
        isAuth,
        activateAuth: token => {
            setIsAuth(true)
            window.sessionStorage.setItem('token', token)
        }
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}
export default {
    Provider,
    Consumer: Context.Consumer
}