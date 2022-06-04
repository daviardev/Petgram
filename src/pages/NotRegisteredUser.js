import React from 'react'
import Context from '../Context'
import { UseForm } from '../components/UseForm'
import { useRegisterMutation } from '../hooks/useRegisterMutation'

export const NotRegisteredUser = () => {
  const { registerMutation, error, loading } = useRegisterMutation()
  
  return (
      <Context.Consumer>
          {
              ({activateAuth}) => {
                  const onSubmit = ({email, password}) => {
                      const input = { email, password }
                      const variables = { input }
                      registerMutation({ variables }).then(({ data }) => {
                        const {login} = data
                        activateAuth(login)
                      })
                  }

                  const errorMsgRegistro = error && 'El usuario ya existe o quizás hay algún problema'
                  const errorMsgInicio = error && 'Usuario o contraseña incorrectos'
                  return <>
                      <UseForm disabled={loading} error={errorMsgRegistro} onSubmit={onSubmit} title='Registrarse'/>
                      <UseForm disabled={loading} error={errorMsgInicio} onSubmit={activateAuth} title='Iniciar Sesion'/>
                  </>
              }
          }
      </Context.Consumer>
  )
}