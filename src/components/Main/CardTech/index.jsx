import { useState } from 'react'
import { API } from '../../../services/api'
import { Card } from './style'

export const CardTech = ({ id, technology, techs, status, setStatusModalUpdate, setCardCurrent }) => {

    const [currentUser, setCurrentUser] = useState(null)
    const token = localStorage.getItem("@hub:token")

    const renderModal = async () => {
        techs.forEach(tech => {
            if (tech.id === id) {
                setCardCurrent(tech)
            }
        })
        setStatusModalUpdate(true)
    }

    return (
        <Card onClick={renderModal}>
            <h2>{technology}</h2>
            <div>
                <p>{status ? status : "Nenhum"}</p>
            </div>
        </Card>
    )
}
