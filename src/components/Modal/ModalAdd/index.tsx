import { useRef, useState, FormEvent, FunctionComponent } from 'react'
import { toast } from 'react-toastify'
import { AnyObject } from 'yup/lib/types'
import { useValidation } from '../../../context/validation'
import { API } from '../../../services/api'
import { ModalStructure } from '../ModalStructure'
import * as S from './style'

interface iPropsValidate {
    statusModalAdd: Boolean | undefined | null
    setStatusModalAdd: Function
    setTechs: Function
}

interface iValidatyObjectAdd {
    title: string | undefined
    status: string | undefined
}

export const ModalAdd = ({ statusModalAdd, setStatusModalAdd, setTechs }:iPropsValidate) => {
    const token = localStorage.getItem("@hub:token")
    const { getUserData } = useValidation()
    const inputValue = useRef<HTMLInputElement>(null)
    const selectValue = useRef<HTMLSelectElement>(null)

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault()
        try { 
            const body: iValidatyObjectAdd = {
                title: inputValue.current?.value,
                status: selectValue.current?.value
            }
            await API.post("users/techs", body, {
                headers: { "Authorization": `Bearer ${token}` }
            })
            const result = await getUserData(token)
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
