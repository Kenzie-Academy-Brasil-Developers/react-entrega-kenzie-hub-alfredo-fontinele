import { Card } from './style'
import { Dispatch, SetStateAction } from 'react';

interface IValidId {
    id: string
}

interface ICardValidaty {
    id: string
    technology: string
    techs: IValidId[]
    status: string 
    setStatusModalUpdate: Dispatch<SetStateAction<boolean>>
    setCardCurrent: Dispatch<SetStateAction<{}>>
}

export const CardTech = ({ id, technology, techs, status, setStatusModalUpdate, setCardCurrent }:ICardValidaty) => {

    const renderModal = () => {
        techs.find((tech) => {
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
