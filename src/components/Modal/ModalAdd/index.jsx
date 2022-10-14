import { useRef } from 'react'
import { toast } from 'react-toastify'
import { useValidation } from '../../../hooks/validation'
import { API } from '../../../services/api'
import { ModalStructure } from '../ModalStructure'
import * as S from './style'

export const ModalAdd = ({ setTechs, statusModalAdd, setStatusModalAdd }) => {
    const { getUserData } = useValidation()
    const token = localStorage.getItem("@hub:token")
    const nameValue = useRef()
    const selectValue = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const body = {
                title: nameValue.current?.value,
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
