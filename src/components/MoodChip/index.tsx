import { useContext } from 'react'
import { MoodContext } from '../../contexts/MoodContext'
import * as S from './styles'

interface MoodProps {
    mood: string
}

const MoodChip = (props: MoodProps) => {
    const { currentMood, setCurrentMood } = useContext(MoodContext)

    const onMoodClick = () => {
        setCurrentMood(props.mood)
    }

    return (
        <S.MoodChip active={currentMood === props.mood}
            onClick={onMoodClick}>
            {props.mood}
        </S.MoodChip>
    )
}

export default MoodChip