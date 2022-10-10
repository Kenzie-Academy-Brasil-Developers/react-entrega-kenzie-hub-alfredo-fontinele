import * as S from './style'
import { Link } from 'react-router-dom'

export const FormStructure = ({ title, btnTitle, route, children }) => (
    <S.FormContainer>
        <S.FormTitle position={btnTitle ? "space-between" : "center"}>
            <h2>{title}</h2>
            {btnTitle && (
                <Link to={route}>{btnTitle}</Link>
            )}
        </S.FormTitle>
        {children}
    </S.FormContainer>
)