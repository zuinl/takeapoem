import styled, { keyframes } from 'styled-components'

const Dot1Loading = keyframes`
    0%, 66%, 100% {
        opacity: 1;
    }
    33% {
        opacity: .5;
    }
`

const Dot2Loading = keyframes`
    0%, 33%, 100% {
        opacity: 1;
    }
    66% {
        opacity: .5;
    }
`

const Dot3Loading = keyframes`
    0%, 33%, 66% {
        opacity: 1;
    }
    100% {
        opacity: .5;
    }
`

export const LoadingMessage = styled.h2`
    text-align: center;
    width: 100%;
    color: var(--logo-color-text);
    margin: 1rem 0 1rem 0;
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: italic;

    & #dot1 {
        animation: ${Dot1Loading} 3s ease infinite;
    }

    & #dot2 {
        animation: ${Dot2Loading} 3s ease infinite;
    }

    & #dot3 {
        animation: ${Dot3Loading} 3s ease infinite;
    }
`