import { FaTrash } from 'react-icons/fa'
import { Card } from './style'

export const CardUser = ({ name, status }) => (
    <Card>
        <h2>{name}</h2>
        <div>
            <p>{status ? status : "Nenhum"}</p>
            <FaTrash/>
        </div>
    </Card>
)