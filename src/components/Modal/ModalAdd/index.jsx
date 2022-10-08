import { useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import { API } from '../../../services/api'
import { ModalStructure } from '../ModalStructure'
import * as S from './style'

export const ModalAdd = ({ statusModalAdd, setStatusModalAdd, setTechs }) => {

    const token = localStorage.getItem("@hub:token")
    const nameValue = useRef()
    const selectValue = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            title: nameValue.current?.value,
            status: selectValue.current?.value
        }
        return await API.post("users/techs", body, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(() => {
            toast.success("Tecnologia Cadastrada com Sucesso")
            setStatusModalAdd(false)
        })
        .catch(() => {
            toast.error("Ops! Verifique se preencheu os campos corretamente")
        })
    }

    return (
        <ModalStructure>
            <S.ModalAdd onSubmit={handleSubmit}>
                <S.ModalTop>
                    <h3>Cadastrar Tecnologia</h3>
                    <button type="button" onClick={() => setStatusModalAdd(false)}>X</button>
                </S.ModalTop>
                <S.ModalDescription>
                    <label>Nome</label>
                    <input ref={nameValue} type="text" placeholder="Insira uma Tecnologia"/>
                    <label>Status</label>
                    <select ref={selectValue}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <S.Buttons>
                        <button id="btn__submit" type="submit">Cadastrar Tecnologia</button>
                    </S.Buttons>
                </S.ModalDescription>
            </S.ModalAdd>
        </ModalStructure>
    )
}
