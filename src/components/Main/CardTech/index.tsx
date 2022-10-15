import { useState } from 'react'
import { AnyObject } from 'yup/lib/types'
import { Card } from './style'

interface iCardValidaty {
    id: string
    technology: string
    techs: object[] 
    status: string 
    setStatusModalUpdate: Function 
    setCardCurrent: Function
}

export const CardTech = ({ id, technology, techs, status, setStatusModalUpdate, setCardCurrent }:iCardValidaty) => {
    const [currentUser, setCurrentUser] = useState(null)
    const token = localStorage.getItem("@hub:token")

    const renderModal = () => {
        techs.find((tech: object) => {
            const { id: index }:AnyObject = tech
            if (index === id) {
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
