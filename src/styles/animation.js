import { keyframes, css } from "styled-components"

const fadeInKeyframes = keyframes`
   50%{ transform: scale(1.1); }
`

export const fadeIn = ({ time = '0.3s', type = 'ease' } = {}) => 
    css`
        animation: ${time} ${fadeInKeyframes} ${type};
`