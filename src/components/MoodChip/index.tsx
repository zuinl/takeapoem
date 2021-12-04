import * as S from './styles'

interface MoodProps {
    mood: string,
    active?: boolean,
    onClick?: () => void
}

const MoodChip = (props: MoodProps) => {
    const onMoodClick = () => {
        if(props.onClick) props.onClick()
    }

    return (
        <S.MoodChip active={props.active}
            onClick={onMoodClick}>
            {props.mood}
        </S.MoodChip>
    )
}

export default MoodChip