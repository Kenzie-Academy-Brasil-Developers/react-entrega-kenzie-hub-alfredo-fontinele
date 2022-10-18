import * as S from './style'
import logoAdd from '../../assets/AddImage.png'
import { useCallback, useEffect, useState } from 'react'
import { ListTech } from './ListTech'
import { ModalUpdate } from '../Modal/ModalUpdate'
import { ModalAdd } from '../Modal/ModalAdd'
import { useValidation } from './../../context/validation';

type TCard = object
type TFunction = Function | boolean

export const Main = () => {
    const [cardCurrent, setCardCurrent] = useState<TCard>({})
    const [statusModalUpdate, setStatusModalUpdate] = useState<TFunction>(false)
    const [statusModalAdd, setStatusModalAdd] = useState<TFunction>(false)
    const [techs, setTechs] = useState<[]>([])
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
