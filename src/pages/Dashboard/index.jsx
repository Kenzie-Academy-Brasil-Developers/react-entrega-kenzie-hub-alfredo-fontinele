import { useEffect, useContext } from "react"
import { Container } from "../../components/Container/style"
import { Header } from "../../components/Header"
import { Line } from "../../components/LineDivision/style"
import { Main } from "../../components/Main"
import { User } from "../../components/User"
import { ValidationContext } from "../../hooks/validation"

export const Dashboard = () => {
    const { navigate } = useContext(ValidationContext)

    useEffect(() => {
        const logged = localStorage.getItem("@hub:token")
        if (!logged) {
            navigate("/")
        }
    }, [])

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
