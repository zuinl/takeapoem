import React from 'react'
import * as S from './styles'

import Logo from '../../assets/logo.svg'

const Header = () => {
    return (
        <S.Header>
            <S.Logo src={Logo} alt="Take a Poem" />

            <S.Description>
                Take a deep breath and Take a Poem
            </S.Description>
        </S.Header>
    )
}

export default Header