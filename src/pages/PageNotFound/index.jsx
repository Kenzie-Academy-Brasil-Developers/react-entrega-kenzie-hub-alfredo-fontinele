import { Link } from "react-router-dom"
import * as S from './style'

export const PageNotFound = () => {
    return (
        <S.PageNotFound>
            <h1>Ops! Essa Página não Existe</h1>
            <Link to="/">Voltar pra Login</Link>
        </S.PageNotFound>
    )
}
