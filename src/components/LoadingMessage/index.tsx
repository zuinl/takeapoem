import { useContext, useEffect, useState } from 'react'
import { MoodContext } from '../../contexts/MoodContext'
import * as S from './styles'

const LoadingMessage = () => {
    const { currentMood } = useContext(MoodContext)
    const [show, setShow] = useState(false)
    const [showTimer, setShowTimer] = useState<any>(null)

    useEffect(() => {
        if(currentMood) {
            handleCurrentMoodChange()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentMood])

    const handleCurrentMoodChange = () => {
        setShow(true)

        setShowTimer(setTimeout(resetShow, 5000))
    }

    const resetShow = () => {
        setShow(false)

        clearTimeout(showTimer)
    }

    return (
        show ?
            <S.Wrapper>
                <S.LoadingMessage>
                    I'm looking for the perfect poem for feeling {currentMood}
                </S.LoadingMessage>
            </S.Wrapper>
        :
            null
    )
}

export default LoadingMessage