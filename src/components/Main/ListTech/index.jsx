import { CardTech } from '../CardTech'
import * as S from './style'

export const ListTech = ({ techs, setStatusModalUpdate, setCardCurrent }) => {
    return (
        <S.MainList>
            {(techs.length) ? (
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
            ) : (
                <>
                    <h3>Nenhuma Tecnologia foi Cadastrada ainda.</h3>
                    <p>Quando criar suas tecnologias você pode clicar nos cards para removê-las ou atualizar seu status</p>
                </>
            )}        
        </S.MainList>
    )
}