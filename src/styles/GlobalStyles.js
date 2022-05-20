import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
        
    *, *::before, *::after {
        box-sizing: inherit;
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
    }

    #app {
        overflow: scroll;
        overflow-x: hidden;
        height: 580px;
        padding-bottom: 10px;
        width: 330px;
        background-color: #fefefe;
        border-radius: 5px;
        margin: 0 auto;
        &::-webkit-scrollbar {
            display: none;
        }
    }

    #phone {
        overflow-x: hidden;
        width: 350px;
        border-radius: 30px;
        background-color: rgb(36, 36, 36);
        margin: 20px auto;
    }

    #camera {
        display: block;
        width: 60px;
        height: 8px;
        border-radius: 20px;
        margin-bottom: 25px;
        background-color: rgb(107, 107, 107);
        left: 42%;
        position: relative;
    }

    #button_down {
        width: 100%;
    }

    #btn_home {
        width: 70px;
        height: 25px;
        display: flex;
        border-radius: 40px;
    }
`