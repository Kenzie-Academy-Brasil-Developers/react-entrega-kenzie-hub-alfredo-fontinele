import * as S from './style'
import logoAdd from '../../assets/AddImage.png'
import { useCallback, useEffect, useState } from 'react'
import { ListTech } from './ListTech'
import { ModalUpdate } from '../Modal/ModalUpdate'
import { ModalAdd } from '../Modal/ModalAdd'
import { useValidation } from './../../context/validation';

export interface IValidTech {
    id: string
    title: string
    status: string
}

export const Main = () => {
    const [statusModalUpdate, setStatusModalUpdate] = useState<boolean>(false)
    const [statusModalAdd, setStatusModalAdd] = useState<boolean>(false)
    const [techs, setTechs] = useState<IValidTech[]>([])
    const [cardCurrent, setCardCurrent] = useState({})
    const { getUserTechs, getToken } = useValidation()

    const setUserTechsCall = useCallback(async() => {
        const token = getToken()
        if (token) {
            const techs = await getUserTechs(token)
            setTechs(techs)
        }
    }, [techs])

    useEffect(() => {
        setUserTechsCall()
    }, [])

    return (
        <>
            {statusModalUpdate && 
                <ModalUpdate 
                    setTechs={setTechs} 
                    cardCurrent={cardCurrent} 
                    setStatusModalUpdate={setStatusModalUpdate}
                />
            }
            {statusModalAdd && 
                <ModalAdd 
                    setStatusModalAdd={setStatusModalAdd} 
                    setTechs={setTechs}
                />
            }
            <S.MainContainer>
                <S.MainTop>
                    <h2>Tecnologias</h2>
                    <img onClick={() => setStatusModalAdd(true)} src={logoAdd} alt="Logo | Adicionar" />
                </S.MainTop>
                <ListTech techs={techs} setStatusModalUpdate={setStatusModalUpdate} setCardCurrent={setCardCurrent}/>
            </S.MainContainer>
        </>
    )
}
