import * as S from './style'
import logoAdd from '../../assets/AddImage.png'
import { useCallback, useEffect, useState } from 'react'
import { ListTech } from './ListTech'
import { ModalUpdate } from '../Modal/ModalUpdate'
import { ModalAdd } from '../Modal/ModalAdd'
import { useValidation } from './../../context/validation';

type State = null | boolean

interface Tech {
    techs: []
}

export const Main = () => {
    const [cardCurrent, setCardCurrent] = useState<State>(null)
    const [statusModalUpdate, setStatusModalUpdate] = useState<State>(false)
    const [statusModalAdd, setStatusModalAdd] = useState<State>(false)
    const [techs, setTechs] = useState<Tech[]>([])
    const { getUserTechs } = useValidation()

    const setUserTechsCall = useCallback(async() => {
        const token = localStorage.getItem("@hub:token")
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
                    statusModalUpdate={statusModalUpdate} 
                    setStatusModalUpdate={setStatusModalUpdate}
                />
            }
            {statusModalAdd && 
                <ModalAdd 
                    statusModalAdd={statusModalAdd} 
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
