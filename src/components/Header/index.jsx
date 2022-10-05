import { Link } from 'react-router-dom'
import * as S from './style'

export const Header = ({title}) => {

    const logout = () => {
        localStorage.clear()
    }

    return (
        <S.Header>
            <S.HeaderTitle>{title}</S.HeaderTitle>
            <S.HeaderLogout to="/" onClick={logout}>Sair</S.HeaderLogout>
        </S.Header>
    )
}