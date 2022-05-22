import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&family=Roboto:wght@400;700&display=swap');

    html {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
        
    *, *::before, *::after {
        box-sizing: inherit;
    }

    a {
        text-decoration: none;
    }
        
    ul, li, h1, h2, h3, p, button {
        margin: 0;
    }

    ul {
        list-style: none;
    }

    button {
        background: transparent;
        border: 0;
        outline: 0;
    }

    body {
        background: #fefefe;
        height: 100vh;
        margin: 0 auto;
        max-width: 500px;
        overscroll-behavior: none;
        width: 100%;
        &::-webkit-scrollbar {
            background-color: transparent;
            width: 5px;
        }
        &::-webkit-scrollbar-thumb {
            background-image: linear-gradient(#405de6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80);
            border-radius: 10px;
        }
    }

    #app {
        overflow: scroll;
        overflow-x: hidden;
        min-height: 100vh;
        padding-bottom: 10px;
        border-radius: 5px;
        background-color: #fefefe;
        margin: 0 auto;
        &::-webkit-scrollbar {
            display: none;
        }
    }
`