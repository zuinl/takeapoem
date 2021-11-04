import * as S from './styles'
import {
    IoMdMoon,
    IoMdSunny
} from 'react-icons/io'

interface ThemeButtonProps {
    theme: string,
    toggleTheme: any
}

const ThemeButton = (props: ThemeButtonProps) => {
    return (
        <S.ThemeButton onClick={props.toggleTheme}
            light={props.theme === "light"}>
            {props.theme === "dark" ?
                <IoMdMoon size="22" />
            :
                <IoMdSunny size="22" />
            }
        </S.ThemeButton>
    )
}

export default ThemeButton