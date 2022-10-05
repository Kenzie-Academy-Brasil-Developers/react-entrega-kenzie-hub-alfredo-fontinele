import * as S from './style'
import logoAdd from '../../assets/AddImage.png'
import { API } from '../../services/api'
import { useEffect, useState } from 'react'
import { ListUsers } from './ListUsers'
import { ControlPage } from './ControlPage'

export const Main = () => {

    const [users, setUsers] = useState([])
    const [page, setPage] = useState(2)

    useEffect(() => {
        (async () => {
            const { data } = await API.get(`users?perPage=15&page=${page}`)
            setUsers(data)
        })()
    }, [page])

    return (
        <S.MainContainer>
            <S.MainTop>
                <h2>Tecnologias</h2>
                <img src={logoAdd} alt="Logo | Adicionar" />
            </S.MainTop>
            <ListUsers users={users}/>
            <ControlPage page={page} setPage={setPage}/>
        </S.MainContainer>
    )
}
