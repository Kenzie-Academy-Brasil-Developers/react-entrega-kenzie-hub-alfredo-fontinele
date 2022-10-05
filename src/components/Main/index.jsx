import * as S from './style'
import logoAdd from '../../assets/AddImage.png'
import { API } from '../../services/api'
import { useEffect, useState } from 'react'
import { ListUsers } from './ListUsers'
import { ControlPage } from './ControlPage'
import { ModalUser } from './ModalUser'

export const Main = () => {
    const [cardCurrent, setCardCurrent] = useState(null)
    const [statusModal, setStatusModal] = useState(false)
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        (async () => {
            const { data } = await API.get(`users?perPage=15&page=${page}`)
            setUsers(data)
        })()
    }, [page])

    return (
        <>
            {statusModal && <ModalUser cardCurrent={cardCurrent} setStatusModal={setStatusModal}/>}
            <S.MainContainer>
                <S.MainTop>
                    <h2>Tecnologias</h2>
                    <img src={logoAdd} alt="Logo | Adicionar" />
                </S.MainTop>
                <ListUsers users={users} setStatusModal={setStatusModal} setCardCurrent={setCardCurrent}/>
                <ControlPage page={page} setPage={setPage}/>
            </S.MainContainer>
        </>
    )
}
