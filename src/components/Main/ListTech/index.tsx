import { CardTech } from '../CardTech'
import * as S from './style'

interface IListTechValidaty {
    techs: []
    setStatusModalUpdate: Function
    setCardCurrent: Function
}

interface IValidTech {
    id: string
    technology: string
    status: string
    title: string
}

export const ListTech = ({ techs, setStatusModalUpdate, setCardCurrent }:IListTechValidaty) => {
    return (
        <S.MainList>
            {(techs.length) ? (
                techs.map((tech: IValidTech) => (
                    <CardTech 
                        key={tech.id} 
                        id={tech.id} 
                        techs={techs}
                        technology={tech.title} 
                        status={tech.status}
                        setStatusModalUpdate={setStatusModalUpdate}
                        setCardCurrent={setCardCurrent}
                    />
                ))
            ) : (
                <>
                    <h3>Nenhuma Tecnologia foi Cadastrada ainda.</h3>
                    <p>Quando criar suas tecnologias você pode clicar nos cards para removê-las ou atualizar seu status</p>
                </>
            )}        
        </S.MainList>
    )
}