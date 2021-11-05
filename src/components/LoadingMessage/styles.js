import styled, { keyframes } from 'styled-components'

const typing = keyframes`
    from { width: 0 }
    to { width: 100% }
`

const blinkCaret = keyframes`
    from, to { border-color: transparent }
    50% { border-color: orange; }
`

export const Wrapper = styled.div`
    width: 100%;
    margin: 1rem 0 1rem 0;
    display: flex;
    justify-content: center;
`

export const LoadingMessage = styled.h2`
    text-align: center;
    overflow: hidden;
    color: var(--logo-color-text);
    font-size: 1.5rem;
    font-weight: 700;
    white-space: nowrap;
    border-right: .15em solid var(--logo-color-text);
    text-decoration: italic;
    animation: ${typing} 3.5s steps(40, end), ${blinkCaret} .75s step-end infinite;
`