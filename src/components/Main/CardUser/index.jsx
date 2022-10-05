import { useEffect, useState } from 'react'
import { FaTrash } from 'react-icons/fa'
import { API } from '../../../services/api'
import { Card } from './style'

export const CardUser = ({ id, technology, status, setStatusModal, setCardCurrent }) => {

    const [currentUser, setCurrentUser] = useState(null)

    const renderModal = async () => {
        const { data } = await API.get(`users/${id}`)
        setCardCurrent(data)
        setStatusModal(true)
    }

    return (
        <Card onClick={renderModal}>
            <h2>{technology}</h2>
            <div>
                <p>{status ? status : "Nenhum"}</p>
                <FaTrash/>
            </div>
        </Card>
    )
}
