import { CardTech } from '../CardTech'
import * as S from './style'
import { Dispatch } from 'react';
import { SetStateAction } from 'react';
import { IValidTech, IValidCard } from './../index';

interface IListTechValidaty {
    techs: IValidTech[]
    setStatusModalUpdate: Dispatch<SetStateAction<boolean>>
    setCardCurrent: Dispatch<SetStateAction<{}>>
}

export const ListTech = ({ techs, setStatusModalUpdate, setCardCurrent }:IListTechValidaty) => (
    <S.MainList>
        {(techs.length) ? (
            techs.map((tech) => (
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
