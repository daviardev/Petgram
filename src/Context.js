import React, { createContext, useState } from 'react'
const Context = createContext()

const Provider = ({ children }) => {
//En caso sea true, dejará entrar a Favs y User sí no, no dejará entrar y pedirá registro de usuario
    const [isAuth, setIsAuth] = useState(false)

    const value = {
        isAuth,
        activateAuth: () => {
            setIsAuth(true)
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