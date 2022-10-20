import { useRef, useState, FormEvent, FunctionComponent, Dispatch, SetStateAction } from 'react'
import { toast } from 'react-toastify'
import { IValidToken, useValidation } from '../../../context/validation'
import { API } from '../../../services/api'
import { ModalStructure } from '../ModalStructure'
import * as S from './style'
import { IValidTech } from './../../Main/index';

interface IModalAddValidate {
    setStatusModalAdd: Dispatch<SetStateAction<boolean>>
    setTechs: Dispatch<SetStateAction<IValidTech[]>>
}

export const ModalAdd = ({ setStatusModalAdd, setTechs }:IModalAddValidate) => {
    const { getUserTechs, getToken } = useValidation()
    const inputValue = useRef<HTMLInputElement>(null)
    const selectValue = useRef<HTMLSelectElement>(null)

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault()
        try { 
            const token:IValidToken = getToken()
            const body = {
                title: inputValue.current?.value,
                status: selectValue.current?.value
            }
            await API.post("users/techs", body, {
                headers: { "Authorization": `Bearer ${token}` }
            })
            const result = await getUserTechs(token)
            setTechs(result)
            setStatusModalAdd(false)
            toast.success("Tecnologia Cadastrada com Sucesso")
        } catch {
            toast.error("Ops! Verifique se preencheu os campos corretamente ou se há tecnologias com mesmo nome")
        }
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
                    <input ref={inputValue} type="text" placeholder="Insira uma Tecnologia"/>
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
