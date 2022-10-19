import { Card } from './style'

interface IValidTech {
    id: string
}

interface ICardValidaty {
    id: string
    technology: string
    techs: IValidTech[]
    status: string 
    setStatusModalUpdate: Function 
    setCardCurrent: Function
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
