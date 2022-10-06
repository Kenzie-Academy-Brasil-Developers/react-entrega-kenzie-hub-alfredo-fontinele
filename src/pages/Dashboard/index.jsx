import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Container } from "../../components/Container/style"
import { Header } from "../../components/Header"
import { Line } from "../../components/LineDivision/style"
import { Main } from "../../components/Main"
import { User } from "../../components/User"

export const Dashboard = () => {

    const logged = localStorage.getItem("@hub:token")
    const navigate = useNavigate()

    useEffect(() => {
        if (!logged) {
            navigate("/")
        }
    }, [logged])

    return (
        <>
            <Container>
                <Header title="Kenzie Hub"/>
            </Container>
            <Line/>
            <Container>
                <User/>
            </Container>
            <Line/>
            <Container>
                <Main/>
            </Container>
        </>
    )
}