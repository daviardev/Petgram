import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { H1 ,Button, Form, Input, LoginBox, Login, LoginContent, LoginForms, Error } from './styles'
import { IoMailOutline, IoLockClosedOutline } from 'react-icons/io5'
const COLOR = 'white'
const SIZE = '23px'
export const UseForm = ({ disabled, onSubmit, title, error }) => {
    
    const email = useInputValue('')
    const password = useInputValue('')

    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({ email: email.value, password: password.value })
        //Imprimir por consola el valor introducido de correo y contraseña
        //console.log(`El correo es ${email.value}, la contraseña es: ${password.value}`)
    }
    return (
        <Login>
            <LoginContent>
                <LoginForms>
                    <Form disabled={disabled} onSubmit={handleSubmit}>
                        <H1>{ title }</H1>

                        <LoginBox>
                            <IoMailOutline color={COLOR} size={SIZE}/>
                            <Input disabled={disabled} placeholder='Email' type='email' {...email} />
                        </LoginBox>

                        <LoginBox>
                            <IoLockClosedOutline color={COLOR} size={SIZE}/>
                            <Input disabled={disabled} placeholder='Contraseña' type='password' {...password} />
                        </LoginBox>
                        <Button disabled={disabled}>{ title }</Button>
                    </Form>
                    { error && <Error>{error}</Error> }
                </LoginForms>
            </LoginContent>
        </Login>
    )
}