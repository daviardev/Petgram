import React from 'react'
import Context from '../Context'
import { UseForm } from '../components/UseForm'
import { LoginAccount, LoginSignin } from '../components/UseForm/styles'

export const NotRegisteredUser = () => (
    <Context.Consumer>
        {
            ({ activateAuth }) => {
                return (
                    <>
                        <UseForm title='Crear Cuenta' onSubmit={activateAuth} />
                        <UseForm title='Iniciar Sesión' onSubmit={activateAuth} />
                    </>
                )
            }
        }
    </Context.Consumer>
)