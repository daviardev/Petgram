import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Link = styled(LinkRouter)`
    display: flex;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    width: 75px;
`

export const Image = styled.img`
    border: 1px;
    padding: 1.5px;
    border-radius: 50%;
    background-image: linear-gradient(#405de6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80);
    height: auto;
    overflow: hidden;
    object-fit: cover;
    height: 75px;
    width: 75px;
`