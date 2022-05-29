import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'

export const Container = styled.div`
    max-width: 968px;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
`

export const Nav = styled.nav`
    position: fixed;
    bottom: 2rem;
    left: 0;
    right: 0;
    width: 328px;
    height: 72px;
    background-color: #fff;
    box-shadow: 0 8px 32px hsla(231, 44%, 45%, .2);
    margin: 0 auto;
    padding: 1.5rem .5rem;
    border-radius: .65rem;
    overflow: hidden;
`

export const Ul__list = styled.ul`
    display: flex;
    justify-content: center;
    column-gap: 2rem;
    list-style: none;
`

export const A__link = styled(LinkRouter)`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: #888;
`