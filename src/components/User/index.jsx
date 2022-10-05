import { useState, useEffect } from 'react'
import * as S from './style'

export const User = () => {

    const [name, setName] = useState(null)
    const [course_module, setCourseModule] = useState(null)

    useEffect(() => {
        const getUser = () => {
            const name = localStorage.getItem("@hub:name")
            const course_module = localStorage.getItem("@hub:course_module")
            setName(name)
            setCourseModule(course_module)
        }
        getUser()
    }, [])

    return (
        <S.UserContainer>
            <h2>Olá, {name}</h2>
            <p>{course_module}</p>
        </S.UserContainer>
    )
}