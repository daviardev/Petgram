import React from 'react'
import Context from '../Context'
import { UseForm } from '../components/UseForm'

export const NotRegisteredUser = () => (
    <Context.Consumer>
        {
            ({ activateAuth }) => {
                return (
                    <UseForm onSubmit={activateAuth} /> 
                )
            }
        }
    </Context.Consumer>
)