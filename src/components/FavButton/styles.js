import styled from 'styled-components'
import { FaHeart } from "react-icons/fa";
import { fadeIn } from '../../styles/animation';

export const Button = styled.button`
    display: flex;
    align-items: center;
    padding-top: 8px;
    & svg {
        margin-right: 4px;
    }
`

export const LikedButton = styled(FaHeart)`
    color: #ff277A;
    ${fadeIn({time: '.2s'})}
`