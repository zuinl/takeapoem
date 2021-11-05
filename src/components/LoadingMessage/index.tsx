import * as S from './styles'

interface LoadingMessageProps {
    message?: string
}

const LoadingMessage = (props: LoadingMessageProps) => {
    return (
        <S.Wrapper>
            <S.LoadingMessage>
                {props.message || "Buscando"}...
            </S.LoadingMessage>
        </S.Wrapper>
    )
}

export default LoadingMessage