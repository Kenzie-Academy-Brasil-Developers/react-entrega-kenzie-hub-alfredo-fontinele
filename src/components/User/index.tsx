import { useState, useEffect, ReactNode } from 'react'
import { API } from '../../services/api'
import * as S from './style'

export const User = () => {
    const token = localStorage.getItem("@hub:token")
    const [name, setName] = useState(null)
    const [course_module, setCourseModule] = useState(null)

    useEffect(() => {
        (async() => {
            const { data }:any = await API.get("profile", {
                headers: { Authorization: `Bearer ${token}` }
            })
            const { name:nome, course_module: curso } = data
            setName(nome)
            setCourseModule(curso)
        })()
    }, [])

    return (
        <S.UserContainer>
            <h2>Olá, {name}</h2>
            <p>{course_module}</p>
        </S.UserContainer>
    )
}
