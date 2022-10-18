import * as S from './style'
import { AnyObject } from 'yup/lib/types'
import { Link } from 'react-router-dom'
import { ReactNode } from 'react';

interface Form {
    title: string
    btnTitle: string
    route: string
    children: ReactNode
}

export const FormStructure = ({ title, btnTitle, route, children }:Form) => (
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
