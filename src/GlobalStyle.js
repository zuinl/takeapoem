import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-dark: #0B3470;
        --secondary-dark: #1357BD;
        --primary-light: #619BF2;
        --secondary-light: #186EF0;

        --primary-font: 'Andada Pro', serif;

        --logo-color-text: #FF9B7F;
        --text-light: #c6dbff;
    }

    * {
        box-sizing: border-box;
    }

    body {
        background-color: var(--primary-dark);
    }

    .App {
        width: 100%;
        max-width: 700px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 2rem 1rem;
        margin: 0 auto;
    }
    
    body, input, textarea, select, button {
        font-family: var(--primary-font);
    }
    
    button {
        cursor: pointer;
        transition: .4s ease;

        &:hover {
            opacity: .8;
        }
    }
    
    input, button, select {
        outline: none;
    }
`

export default GlobalStyle