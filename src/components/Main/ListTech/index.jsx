import { CardTech } from '../CardTech'
import * as S from './style'

export const ListTech = ({ techs, setStatusModalUpdate, setCardCurrent }) => {
    return (
        <S.MainList>
            {
                techs.map(({ id, title, status }) => (
                    (id, title, status) && (
                        <CardTech 
                            key={id} 
                            id={id} 
                            techs={techs}
                            technology={title} 
                            status={status}
                            setStatusModalUpdate={setStatusModalUpdate}
                            setCardCurrent={setCardCurrent}
                        />
                    )
                ))
            }        
        </S.MainList>
    )
}