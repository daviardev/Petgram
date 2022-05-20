import styled from 'styled-components'
import { fadeIn } from '../../styles/animation'

export const ImgWrapper = styled.div`
    display: block;
    height: 0;
    overflow: scroll;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
    &::-webkit-scrollbar {
        display: none;
    }
`

export const Img = styled.img`
    ${fadeIn()}
    box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    right: 25px;
    border-radius: 10px;
`

export const Button = styled.button`
    display: flex;
    align-items: center;
    padding-top: 8px;
    & svg {
        margin-right: 4px;
    }
`