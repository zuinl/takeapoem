import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-dark: #${props => props.theme === "light" ? '619BF2' : '0B3470'};
        --secondary-dark: #${props => props.theme === "light" ? '186EF0' : '1357BD'};
        --primary-light: #${props => props.theme === "light" ? '0B3470' : '619BF2'};;
        --secondary-light: #${props => props.theme === "light" ? '1357BD' : '186EF0'};

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