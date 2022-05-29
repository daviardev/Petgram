import React from 'react'
import { Nav, Container, Ul__list, A__link } from './styles'
import { RiHome2Line, RiHeartLine, RiUserLine } from 'react-icons/ri'

const SIZE = '22px'
export const NavBar = () => {
    return (
        <Container>
        <br/> <br/>
        <Nav>
            <Ul__list>
                <A__link to='/'>
                    <RiHome2Line size={SIZE} />
                    <span>
                        Home
                    </span>
                </A__link>
                
                <A__link to='/favs'>
                    <RiHeartLine size={SIZE} />
                    <span>
                        Favs
                    </span>
                </A__link>

                <A__link to='/user'>
                    <RiUserLine size={SIZE} />
                    <span>
                        User
                    </span>
                    </A__link>
                </Ul__list>
        </Nav>
        </Container>
    )
}