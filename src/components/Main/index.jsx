import * as S from './style'
import logoAdd from '../../assets/AddImage.png'
import { API } from '../../services/api'
import { useEffect, useState } from 'react'
import { ListUsers } from './ListUsers'
import { ControlPage } from './ControlPage'
import { ModalUpdate } from '../Modal/ModalUpdate'
import { ModalAdd } from '../Modal/ModalAdd'

export const Main = () => {
    const [cardCurrent, setCardCurrent] = useState(null)
    const [statusModalUpdate, setStatusModalUpdate] = useState(false)
    const [statusModalAdd, setStatusModalAdd] = useState(false)
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
        (async () => {
            console.log(page)
            const { data } = await API.get(`users?perPage=15&page=${page}`)
            setUsers(data)
        })()
    }, [page])

    return (
        <>
            {statusModalUpdate && 
                <ModalUpdate 
                    page={page} 
                    setUsers={setUsers} 
                    cardCurrent={cardCurrent} 
                    statusModalUpdate={statusModalUpdate} 
                    setStatusModalUpdate={setStatusModalUpdate}
                />
            }
            {statusModalAdd && 
                <ModalAdd 
                    page={page} 
                    statusModalAdd={statusModalAdd} 
                    setStatusModalAdd={setStatusModalAdd} 
                    setUsers={setUsers}
                />
            }
            <S.MainContainer>
                <S.MainTop>
                    <h2>Tecnologias</h2>
                    <img onClick={() => setStatusModalAdd(true)} src={logoAdd} alt="Logo | Adicionar" />
                </S.MainTop>
                <ListUsers users={users} setStatusModalUpdate={setStatusModalUpdate} setCardCurrent={setCardCurrent}/>
                <ControlPage page={page} setPage={setPage}/>
            </S.MainContainer>
        </>
    )
}
