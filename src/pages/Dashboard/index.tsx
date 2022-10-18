import { Container } from "../../components/Container/style"
import { Header } from "../../components/Header"
import { Line } from "../../components/LineDivision/style"
import { Main } from "../../components/Main"
import { User } from "../../components/User"
import { IValidToken, useValidation } from './../../context/validation';
import { useEffect } from 'react';

export const Dashboard = () => {
    const { navigate, getToken } = useValidation()

    useEffect(() => {
        const token:IValidToken = getToken()
        if (!token) {
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
