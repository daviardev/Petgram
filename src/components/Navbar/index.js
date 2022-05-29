import React from 'react'
import { Nav, Container, Ul__list, A__link } from './styles'
import { RiHome2Line, RiHeartLine, RiUserLine } from 'react-icons/ri'

const COLOR = 'black'
const SIZE = '22px'
export const NavBar = () => {
    return (
        <Container>
        <br/> <br/>
        <Nav>
            <Ul__list>
                <A__link to='/'>
                    <RiHome2Line size={SIZE} color={COLOR} />
                    <span>
                        Home
                    </span>
                </A__link>
                
                <A__link to='/favs'>
                    <RiHeartLine size={SIZE} color={COLOR} />
                    <span>
                        Favs
                    </span>
                </A__link>

                <A__link to='/user'>
                    <RiUserLine size={SIZE} color={COLOR} />
                    <span>
                        User
                    </span>
                    </A__link>
                </Ul__list>
        </Nav>
        </Container>
    )
}