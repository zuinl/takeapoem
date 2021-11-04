import * as S from './styles'

interface LoadingMessageProps {
    message?: string
}

const LoadingMessage = (props: LoadingMessageProps) => {
    return (
        <S.LoadingMessage>
            {props.message || "Buscando"}
            <span id="dot1">.</span>
            <span id="dot2">.</span>
            <span id="dot3">.</span>
        </S.LoadingMessage>
    )
}

export default LoadingMessage