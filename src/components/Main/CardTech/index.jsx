import { useState } from 'react'
import { Card } from './style'

export const CardTech = ({ id, technology, techs, status, setStatusModalUpdate, setCardCurrent }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const token = localStorage.getItem("@hub:token")

    const renderModal = async () => {
        techs.find(tech => {
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
                <p>{status}</p>
            </div>
        </Card>
    )
}
