import * as S from './styles'

interface MoodProps {
    mood: string
}

const MoodChip = (props: MoodProps) => {
    return (
        <S.MoodChip>
            {props.mood}
        </S.MoodChip>
    )
}

export default MoodChip