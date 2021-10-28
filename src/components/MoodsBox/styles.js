import styled from 'styled-components'

export const MoodsBox = styled.div`
    display: grid;
    width: 100%;
    column-gap: 2rem;
    row-gap: 1rem;
    grid-template-columns: auto auto;
    margin-bottom: 2rem;

    @media (min-width: 698px) {
        grid-template-columns: auto auto auto;
    }
`