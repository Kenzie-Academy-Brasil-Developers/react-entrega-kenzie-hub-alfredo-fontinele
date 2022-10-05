import * as S from './style'
import * as yup from 'yup'
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormStructure } from '../../components/Form'
import { ToastContainerStatus } from '../../components/Toast/ToastContainer'
import { toast } from 'react-toastify'
import { Error } from '../../components/Error'
import { API } from '../../services/api'
import 'react-toastify/dist/ReactToastify.css'

export const Register = () => {

    const navigate = useNavigate()

    const FormSchema = yup.object({
        name: yup.string().required("Nome Obrigatório"),
        email: yup.string().required("Email obrigatório").email(),
        password: yup.string().required("Senha obrigatória")
            .matches(/^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/, "Senha com no mínimo 8 caracteres. Necessário ter letras, números e ao menos um símbolo"),
        confirm_password: yup.string().required("Confirme sua Senha")
            .oneOf([yup.ref("password")], "Senhas precisam ser iguais"),
        bio: yup.string().required("Bio Obrigatória"),
        contact: yup.string().required("Contato Obrigatório"),
        course_module: yup.string().required("Módulo Obrigatório")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(FormSchema)
    })

    const onSubmitFormRegister = async (data) => {
        const {email, password, name, bio, contact, course_module} = data
        const info = {
            "email": email,
            "password": password,
            "name": name,
            "bio": bio,
            "contact": contact,
            "course_module": course_module
        }

        return await API.post('users', info)
            .then(res => {
                toast.success("Conta Criada com Sucesso")
                setTimeout(() => {
                    navigate("/")
                }, 2000)
            })
            .catch(err => toast.error("Ops! Algo deu errado"))
    }

    return (
        <>
            <ToastContainerStatus/>
            <FormStructure title="Kenzie Hub" btnTitle="Voltar" route="/">
                <S.FormRegister onSubmit={handleSubmit(onSubmitFormRegister)}>
                    <S.FormRegisterTitle>
                        <h3>Crie sua Conta</h3>
                        <p>Rapido e grátis, vamos nessa</p>
                    </S.FormRegisterTitle>
                    
                    <label>Nome</label>
                    <input type="text" placeholder="Digite aqui seu nome"  {...register("name")}/>
                    {errors.name && <Error text={errors.name.message} />}
                    
                    <label>Email</label>
                    <input type="text" placeholder="Digite aqui seu email" {...register("email")}/>
                    {errors.email && <Error text={errors.email.message} />}
                    
                    <label>Senha</label>
                    <input type="text" placeholder="Digite aqui sua senha" {...register("password")}/>
                    {errors.password && <Error text={errors.password.message} />}
                    
                    <label>Confirmar Senha</label>
                    <input type="text" placeholder="Digite novamente sua senha" {...register("confirm_password")}/>
                    {errors.email && <Error text={errors.email.message} />}

                    <label>Bio</label>
                    <input type="text" placeholder="Fale sobre você" {...register("bio")}/>
                    {errors.bio && <Error text={errors.bio.message} />}

                    <label>Contato</label>
                    <input type="text" placeholder="Opção de Contato" {...register("contact")}/>
                    {errors.contact && <Error text={errors.contact.message} />}

                    <label>Selecionar Módulo</label>
                    <select {...register("course_module")}>
                        <option value="Primeiro Módulo (Introdução ao Frontend)">Primeiro Módulo</option>
                        <option value="Segundo Módulo (Frontend avançado)">Segundo Módulo</option>
                        <option value="Terceiro módulo (Introdução ao Backend)">Terceiro Módulo</option>
                        <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
                    </select>

                    <S.BtnRegister type="submit">Cadastrar</S.BtnRegister>
                </S.FormRegister>
            </FormStructure>        
        </>
    )
}
