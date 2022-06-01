import styled from 'styled-components'

export const H1 = styled.h1`
    margin: 0;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-align: center;
`

export const Form = styled.form`
    position: absolute;
    width: 100%;
    background-color: #f2f2f2;
    padding: 2rem 1rem;
    border-radius: 1rem;
    text-align: center;
    box-shadow: 0 8px 20px rgba(35,0,77,.2);
    animation-duration: .4s;
`

export const Input = styled.input`
    border: none;
    outline: none;
    font-size: .938rem;
    font-weight: 700;
    color: white;
    background-color: #4b75ff;
    &[disabled] {
        opacity: .3;
        color: red;
    }
`

export const Button = styled.button`
    display: block;
    padding: 1.1rem;
    margin: 2rem 0;
    background-color: #4b75ff;
    color: #fff;
    font-weight: 600;
    text-align: center;
    border-radius: .5rem;
    transition: .3s;
    margin-left: 150px;
    text-decoration: none;
    &[disabled] {
        opacity: .3;
        background-color: red;
    }
    
`

export const LoginBox = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: .5rem;
    padding: 1.125rem 1rem;
    background-color: #fff;
    margin-top: 1rem;
    border-radius: .5rem;
    background-color: #4b75ff;
`

export const Login = styled.div`
    display: grid;
    height: 70vh;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
`

export const Error = styled.span`
    display: block;
    font-size: 14px;
    color: red;
    text-align: center;
    padding: 8px 0px;
    margin: 10px 0px 10px;
    width: 100%;
    border:dotted 3px #f51165;
    -moz-border-radius-topleft: 8px;
    -moz-border-radius-topright:8px;
    -moz-border-radius-bottomleft:8px;
    -moz-border-radius-bottomright:8px;
    -webkit-border-top-left-radius:8px;
    -webkit-border-top-right-radius:8px;
    -webkit-border-bottom-left-radius:8px;
    -webkit-border-bottom-right-radius:8px;
    border-top-left-radius:8px;
    border-top-right-radius:8px;
    border-bottom-left-radius:8px;
    border-bottom-right-radius:8px;
    background-color: rgba(215, 44, 44, 0.3);
    background: rgba(215, 44, 44, 0.3);    
`

export const LoginContent = styled.div`
    display: grid;
`

export const LoginForms = styled.div`
    position: relative;
    height: 368px;
`

export const LoginAccount = styled.span`
    color: #000;
    font-weight: 600;
    font-size: .813rem;
`

export const LoginSignup = styled.span`
    font-weight: 600;
    font-size: .813rem;
    color: #4b75ff;
    cursor: pointer;
`

export const LoginSignin = styled.span`
    font-weight: 600;
    font-size: .813rem;
    color: #4b75ff;
    cursor: pointer;
`