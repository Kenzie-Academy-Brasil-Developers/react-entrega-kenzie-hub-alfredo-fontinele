import { useRef } from 'react'
import { toast } from 'react-toastify'
import { API } from '../../../services/api'
import { ModalStructure } from '../../Modal'
import * as S from './style'

export const ModalUser = ({ cardCurrent, setStatusModal }) => {

    const nameValue = useRef()
    const selectValue = useRef()

    const { id, techs: [ obj ] } = cardCurrent

    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            title: nameValue.current?.value,
            status: selectValue.current?.value
        }
        const { data } = await API.post("users/techs", body)
        if (data.message) {
            toast.error("Ops! algo deu errado")
        }
    }

    return (
        <ModalStructure>
            <S.ModalUser onSubmit={handleSubmit}>
                <S.ModalTop>
                    <h3>Tecnologias Detalhadas</h3>
                    <button type="button" onClick={() => setStatusModal(false)}>X</button>
                </S.ModalTop>
                <S.ModalDescription>
                    <label>Nome do Projeto</label>
                    <input ref={nameValue} type="text" placeholder={obj?.title}/>
                    <label>Status</label>
                    <select ref={selectValue}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <S.Buttons>
                        <button id="btn__submit" type="submit">Salvar Alterações</button>
                        <button id="btn__unsave">Excluir</button>
                    </S.Buttons>
                </S.ModalDescription>
            </S.ModalUser>
        </ModalStructure>
    )
}
