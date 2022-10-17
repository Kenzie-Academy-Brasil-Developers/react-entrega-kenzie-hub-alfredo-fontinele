import { useEffect } from 'react'
import { API } from '../../services/api'
import * as S from './style'
import { useValidation } from './../../context/validation';

export const User = () => {
    const { name, course_module } = useValidation()
    return (
        <S.UserContainer>
            <h2>Olá, {name}</h2>
            <p>{course_module}</p>
        </S.UserContainer>
    )
}
