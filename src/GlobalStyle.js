import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary-dark: #0B3470;

        --primary-font: 'Andada Pro', serif;

        --logo-color-text: #FF9B7F;
        --text-light: #DBDBDB;
    }

    * {
        box-sizing: border-box;
    }

    body {
        background-color: var(--color-primary-dark);
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
        font-family: Poppins, sans-serif;
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

    h1 {
        font-family: var(--primary-font);
    }
`

export default GlobalStyle