import * as S from './style'
import { AnyObject } from 'yup/lib/types'
import { Link } from 'react-router-dom'

export const FormStructure = ({ title, btnTitle, route, children }:AnyObject) => (
    <S.FormContainer>
        <S.FormTitle position={btnTitle ? "space-between" : "center"}>
            <h2>{title}</h2>
            {btnTitle &&
                <Link to={route}>{btnTitle}</Link>
            }
        </S.FormTitle>
        {children}
    </S.FormContainer>
)
