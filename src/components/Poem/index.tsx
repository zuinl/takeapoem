import * as S from './styles'

interface PoemProps {
    title: string,
    poem: string
}

const Poem = (props: PoemProps) => {
    return (
        <>
            <S.PoemTitle>{props.title}</S.PoemTitle>
            <S.Poem>{props.poem}</S.Poem>
        </>
    )
}

export default Poem