import styled from 'styled-components'

export const MoodChip = styled.div`
    background: ${props => props.active ? '#FFF' : 'var(--secondary-dark)'};
    padding: .5rem 1rem;
    border-radius: 20px;
    color: ${props => props.active ? 'var(--secondary-dark)' : 'var(--text-light)'};
    text-align: center;
    cursor: pointer;
    box-sizing: border-box;

    &:hover {
        background: var(--secondary-light);
        transition: 1s ease;
        color: #FFF;
    }
`