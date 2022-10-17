import { Container } from "../../components/Container/style"
import { Header } from "../../components/Header"
import { Line } from "../../components/LineDivision/style"
import { Main } from "../../components/Main"
import { User } from "../../components/User"
import { useValidation } from './../../context/validation';
import { useEffect } from 'react';

export const Dashboard = () => {
    const { navigate, setName, setCourseModule, getUserData } = useValidation()
    useEffect(() => {
        (async() => {
            const token = localStorage.getItem("@hub:token")
            if (token) {
                const data = await getUserData(token)
                const { name:nome, course_module: curso } = data
                setName(nome)
                setCourseModule(curso)
            } else {
                navigate("/")
            }
        })()
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
