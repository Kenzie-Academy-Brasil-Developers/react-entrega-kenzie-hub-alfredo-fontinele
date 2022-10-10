import { useState, useEffect } from 'react'
import { API } from '../../services/api'
import * as S from './style'

export const User = () => {
    const [name, setName] = useState(null)
    const [course_module, setCourseModule] = useState(null)

    useEffect(() => {
        (async() => {
            const token = localStorage.getItem("@hub:token")
            if (token) {
                const { data } = await API.get("profile", {
                    headers: { Authorization: `Bearer ${token}` }
                })
                const { name, course_module } = data
                setName(name)
                setCourseModule(course_module)
            }
        })()
    }, [])

    return (
        <S.UserContainer>
            <h2>Olá, {name}</h2>
            <p>{course_module}</p>
        </S.UserContainer>
    )
}
