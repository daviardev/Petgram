import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { H1 ,Button, Form, Input, LoginBox, Login, LoginContent, LoginForms, LoginAccount, LoginSignup, LoginSignin } from './styles'
import { IoMailOutline, IoLockClosedOutline } from 'react-icons/io5'
const COLOR = 'white'
const SIZE = '23px'
export const UseForm = ({ onSubmit, title }) => {
    const email = useInputValue('')
    const password = useInputValue('')
    return (
        <Login>
            <LoginContent>
                <LoginForms>
                    <Form onSubmit={onSubmit}>
                        <H1>{ title }</H1>

                        <LoginBox>
                            <IoMailOutline color={COLOR} size={SIZE}/>
                            <Input placeholder='Email' {...email} />
                        </LoginBox>

                        <LoginBox>
                            <IoLockClosedOutline color={COLOR} size={SIZE}/>
                            <Input placeholder='Contraseña' type='password' {...password} />
                        </LoginBox>
                        <Button>{ title }</Button>
                    </Form>
                </LoginForms>
            </LoginContent>
        </Login>
    )
}