import React from 'react'
import Context from '../Context'
import { UseForm } from '../components/UseForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'

export const NotRegisteredUser = () => {
  const { registerMutation } = useRegisterMutation()
  
  return (
      <Context.Consumer>
          {
              ({activateAuth}) => {
                  const onSubmit = ({email, password}) => {
                      const input = { email, password }
                      const variables = { input }
                      registerMutation({ variables })
                      .then(activateAuth)
                  }
                  return <>
                      <UseForm onSubmit={onSubmit} title='Registrarse'/>
                      <UseForm onSubmit={activateAuth} title='Iniciar Sesion'/>
                  </>
              }
          }
      </Context.Consumer>
  )
}