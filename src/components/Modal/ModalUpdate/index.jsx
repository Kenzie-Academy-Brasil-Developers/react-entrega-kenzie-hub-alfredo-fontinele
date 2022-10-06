import { useRef } from 'react'
import { toast } from 'react-toastify'
import { API } from '../../../services/api'
import { ControlApi } from '../../../services/control'
import { ModalStructure } from '../ModalStructure'
import * as S from './style'

export const ModalUpdate = ({ page, cardCurrent, setStatusModalUpdate, setUsers }) => {

    const token = localStorage.getItem("@hub:token")
    const nameValue = useRef()
    const selectValue = useRef()

    const { id, techs: [ obj ] } = cardCurrent

    const deleteTechnology = async () => {
        return await API.delete(`users/techs/${obj.id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(() => {
            toast.success("Tecnologia Deletada com Sucesso")
            setStatusModalUpdate(false)
            ControlApi.getUsers(page, setUsers)
        })
        .catch(() => {
            toast.error("Ops! Verifique se preencheu os campos corretamente")
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            status: selectValue.current?.value
        }
        return await API.put(`users/techs/${obj.id}`, body, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(() => {
            toast.success("Tecnologia Atualizada com Sucesso")
            setStatusModalUpdate(false)
            ControlApi.getUsers(page, setUsers)
        })
        .catch(() => {
            toast.error("Ops! Verifique se preencheu os campos corretamente")
        })
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
                    <input disabled ref={nameValue} type="text" placeholder={obj?.title}/>
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
