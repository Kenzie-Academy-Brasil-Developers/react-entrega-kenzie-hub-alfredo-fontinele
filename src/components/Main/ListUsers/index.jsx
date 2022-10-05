import { useEffect, useState } from 'react'
import { CardUser } from '../CardUser'
import * as S from './style'

export const ListUsers = ({ users, setStatusModal, setCardCurrent }) => {

    const [existTechnology, setExistTechnology] = useState(true)
    const [usersFormated, setUsersFormated] = useState([])

    const validationTechnology = (arr) => {
        const validation = arr.every(({ technology }) => technology === undefined)
        if (validation) {
            setExistTechnology(false)
        } else {
            setExistTechnology(true)
            setUsersFormated(arr)
        }
    }

    useEffect(() => {
        (() => {
            const filter = users.map(objeto => {
                const { id, techs: [ obj ] } = objeto
                return {
                    id: id,
                    technology: obj?.title,
                    status: obj?.status
                }
            })
            validationTechnology(filter)
        })()
    }, [users])

    return (
        <S.MainList>
            {existTechnology && (
                usersFormated.map(({ id, technology, status }) => (
                (id, technology, status) && (
                    <CardUser 
                        key={id} 
                        id={id} 
                        technology={technology} 
                        status={status}
                        setStatusModal={setStatusModal}
                        setCardCurrent={setCardCurrent}
                    />
                ))
            ))}
            {!existTechnology && (
                <h2>Ops! Nenhuma Tecnologia. Tente ir para a próxima ou volte</h2>
            )}
        </S.MainList>
    )
}