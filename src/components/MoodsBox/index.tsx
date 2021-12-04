import { useState } from 'react'
import useMoods from '../../hooks/Moods/useMoods'
import MoodChip from '../MoodChip'
import * as S from './styles'

const MoodsBox = () => {
    const {
        moods
    } = useMoods()
    const [selectedMood, setSelectedMood] = useState("")

    const onMoodClick = (mood: string) => {
        setSelectedMood(mood)
    }

    return (
        <S.MoodsBox>
            {moods.map(mood => {
                return (
                    <MoodChip key={mood} 
                        mood={mood}
                        active={selectedMood === mood}
                        onClick={() => onMoodClick(mood)} />
                )
            })}
        </S.MoodsBox>
    )
}

export default MoodsBox