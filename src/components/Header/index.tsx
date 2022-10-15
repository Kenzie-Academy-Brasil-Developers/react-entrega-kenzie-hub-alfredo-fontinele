import { Link } from 'react-router-dom'
import * as S from './style'

interface iTitle {
    title: string
}

export const Header = ({ title }: iTitle) => {
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