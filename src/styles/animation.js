import { keyframes, css } from "styled-components"

const fadeInKeyframes = keyframes`
   50%{ transform: scale(1.1); }
`

const popDownKeyFrames = keyframes`
    50%{ transform: translateY(-30px); }
`

export const fadeIn = ({ time = '0.3s', type = 'ease' } = {}) => 
    css`
        animation: ${time} ${fadeInKeyframes} ${type};
`

export const popDown = ({ time = '0.2s', type = 'ease' } = {}) =>
    css`
        animation: ${time} ${popDownKeyFrames} ${type};
    `