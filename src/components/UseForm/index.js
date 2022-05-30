import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'

export const UseForm = ({ onSubmit }) => {

    const email = useInputValue('')
    const password = useInputValue('')
    return (
    <form onSubmit={onSubmit}>
        <input placeholder='Email' {...email} />
        <input placeholder='Contraseña' type='password' {...password} />
        <button>Iniciar sesión</button>
    </form>
    )
}