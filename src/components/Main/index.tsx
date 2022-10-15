import * as S from './style'
import logoAdd from '../../assets/AddImage.png'
import { API } from '../../services/api'
import { useEffect, useState } from 'react'
import { ListTech } from './ListTech'
import { ModalUpdate } from '../Modal/ModalUpdate'
import { ModalAdd } from '../Modal/ModalAdd'

export const Main = () => {
    const [cardCurrent, setCardCurrent] = useState(null)
    const [statusModalUpdate, setStatusModalUpdate] = useState(false)
    const [statusModalAdd, setStatusModalAdd] = useState(false)
    const [techs, setTechs] = useState([])

    useEffect(() => {
        (async () => {
            const token = localStorage.getItem("@hub:token")
            if (token) {
                const { data } = await API.get(`profile`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                const { techs: technologies } = data
                setTechs(technologies)
            }
        })()
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
