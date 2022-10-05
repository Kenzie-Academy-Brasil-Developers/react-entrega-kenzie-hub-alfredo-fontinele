import { useEffect, useState } from 'react'
import { CardUser } from '../CardUser'
import * as S from './style'

export const ListUsers = ({ users }) => {

    const [usersFormated, setUsersFormated] = useState([])

    useEffect(() => {
        (() => {
            const filter = users.map(objeto => {
                const { id, name, techs: [ obj ] } = objeto
                return {
                    id: id,
                    name: name,
                    status: obj?.status
                }
            })
            setUsersFormated(filter)
        })()
    }, [users])

    return (
        <S.MainList>
            {usersFormated ? (
                usersFormated.map(({ id, name, status }) => (
                    <CardUser 
                        key={id} 
                        id={id} 
                        name={name} 
                        status={status}
                    />
                ))
            ) : (
                <h2 style={{ textAlign: 'center', fontSize: 24 }}>Lista Vazia</h2>
            )}
        </S.MainList>
    )
}