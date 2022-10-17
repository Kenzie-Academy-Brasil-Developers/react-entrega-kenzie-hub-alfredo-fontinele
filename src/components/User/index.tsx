import * as S from './style'
import { useLayoutEffect } from 'react'
import { useValidation } from './../../context/validation'

export const User = () => {
    const { 
        user: { name, course_module }, 
        navigate, setDataUser 
    } = useValidation()

    useLayoutEffect(() => {
        setDataUser()
    }, [])

    return (
        <S.UserContainer>
            <h2>Olá, {name}</h2>
            <p>{course_module}</p>
        </S.UserContainer>
    )
}
