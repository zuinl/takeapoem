import * as S from './styles'

interface TitleProps {
    title: string
}

const Title = (props: TitleProps) => {
    return (
        <S.Title>
            {props.title}
        </S.Title>
    )
}

export default Title