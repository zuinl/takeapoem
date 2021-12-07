import useMoods from '../../hooks/useMoods'
import MoodChip from '../MoodChip'
import * as S from './styles'

const MoodsBox = () => {
    const {
        moods
    } = useMoods()

    return (
        <S.MoodsBox>
            {moods.map(mood => {
                return (
                    <MoodChip key={mood} 
                        mood={mood} />
                )
            })}
        </S.MoodsBox>
    )
}

export default MoodsBox