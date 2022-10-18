import { useState, useRef, FormEvent } from 'react'
import { toast } from 'react-toastify'
import { AnyObject } from 'yup/lib/types'
import { useValidation } from '../../../context/validation'
import { API } from '../../../services/api'
import { ModalStructure } from '../ModalStructure'
import * as S from './style'

interface IModalUpdateValidate {
    cardCurrent: AnyObject
    setStatusModalUpdate: Function
    setTechs: Function
}

export const ModalUpdate = ({ cardCurrent, setStatusModalUpdate, setTechs }:IModalUpdateValidate) => {
    const { getUserTechs, getToken } = useValidation()
    const { id, title } = cardCurrent
    const nameValue = useRef<HTMLInputElement>(null)
    const selectValue = useRef<HTMLSelectElement>(null)
    const token = getToken()

    const deleteTechnology = async():Promise<void> => {
        try {
            await API.delete(`users/techs/${id}`, {
                headers: { "Authorization": `Bearer ${token}` }
            })
            const result = await getUserTechs(token)
            setTechs(result)
            setStatusModalUpdate(false)
            toast.success("Tecnologia Deletada com Sucesso")
        } catch {
            toast.error("Ops! Verifique se preencheu os campos corretamente")
        }
    }

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault()
        try {
            const body = {
                status: selectValue.current?.value
            }
            await API.put(`users/techs/${id}`, body, {
                headers: { "Authorization": `Bearer ${token}` }
            })
            const result = await getUserTechs(token)
            setTechs(result)
            toast.success("Tecnologia Atualizada com Sucesso")
            setStatusModalUpdate(false)
        } catch {
            toast.error("Ops! Verifique se preencheu os campos corretamente")
        }
    }

    return (
        <ModalStructure>
            <S.ModalUser onSubmit={handleSubmit}>
                <S.ModalTop>
                    <h3>Tecnologias Detalhadas</h3>
                    <button type="button" onClick={() => setStatusModalUpdate(false)}>X</button>
                </S.ModalTop>
                <S.ModalDescription>
                    <label>Nome do Projeto</label>
                    <input disabled ref={nameValue} type="text" placeholder={`${title} | Este campo não é editável`}/>
                    <label>Status</label>
                    <select ref={selectValue}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <S.Buttons>
                        <button id="btn__submit" type="submit">Salvar Alterações</button>
                        <button onClick={deleteTechnology} id="btn__unsave" type="button" >Excluir</button>
                    </S.Buttons>
                </S.ModalDescription>
            </S.ModalUser>
        </ModalStructure>
    )
}
