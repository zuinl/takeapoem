import styled from 'styled-components'

export const ThemeButton = styled.span`
    position: fixed;
    top: 20px;
    right: 20px;
    color: #${props => props.light ? '0B3470' : '619BF2'};
    cursor: pointer;

    & svg {
        min-width: 22px;
    }

    &:hover {
        opacity: .8;
        transition: .4s ease;
    }
`