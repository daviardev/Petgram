import React from 'react'
import { Nav, Link } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const SIZE = '32px'
const COLOR = 'black'
export const NavBar = () => {
    return (
        <Nav>
            <Link to='/'><MdHome size={SIZE} color={COLOR} /></Link>
            <Link to='/favs'><MdFavoriteBorder size={SIZE} color={COLOR} /></Link>
            <Link to='/user'><MdPersonOutline size={SIZE} color={COLOR} /></Link>
        </Nav>
    )
}