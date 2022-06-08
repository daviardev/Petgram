import styled from 'styled-components'

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