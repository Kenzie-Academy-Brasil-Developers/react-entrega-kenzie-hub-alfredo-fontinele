import { Card } from './style'

interface iCardValidaty {
    id: string
    technology: string
    techs: []
    status: string 
    setStatusModalUpdate: Function 
    setCardCurrent: Function
}

export const CardTech = ({ id, technology, techs, status, setStatusModalUpdate, setCardCurrent }:iCardValidaty) => {

    const renderModal = () => {
        techs.find((tech: { id: string }) => {
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
