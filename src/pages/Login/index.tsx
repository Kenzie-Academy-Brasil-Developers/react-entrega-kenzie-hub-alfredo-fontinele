import * as S from './style'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import { HTMLInputTypeAttribute, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormStructure } from '../../components/Form'
import { Error } from '../../components/Error'
import { useValidation } from '../../context/validation'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'

interface IIconType {
    type: string
}

export const Login = () => {
    const [typeInput, setTypeInput] = useState<HTMLInputTypeAttribute>("password")
    const [passwordIconStatus, setPasswordIconStatus] = useState<boolean>(false)
    const { onSubmitFormLogin } = useValidation()

    const FormSchema = yup.object({
        email: yup.string().required("Email obrigatório").email(),
        password: yup.string().required("Senha obrigatória")
    })

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(FormSchema)
    })

    const toogleIconPassword = (type: IIconType) => {
        setPasswordIconStatus((value) => !value)
        typeInput === "password" ? setTypeInput("text") : setTypeInput("password")
    }

    return (
        <FormStructure title="Kenzie Hub" btnTitle='' route=''>
            <S.FormLogin onSubmit={handleSubmit(onSubmitFormLogin)}>
                <h3>Login</h3>

                <label>Email</label>
                <input type="text" placeholder="Digite seu email" {...register("email")}/>
                {errors.email && <Error text={errors.email.message} />}

                <label>Senha</label>
                <S.FormPassword>
                    <input type={typeInput} placeholder="Digite sua senha" {...register("password")}/>
                    {passwordIconStatus ? (
                        <AiOutlineEye onClick={toogleIconPassword}/>
                    ) : (
                        <AiOutlineEyeInvisible onClick={toogleIconPassword}/>
                    )}
                </S.FormPassword>
                {errors.password && <Error text={errors.password.message} />}

                <button type="submit">Entrar</button>
                <S.FormRegisterLink>
                    <span>Ainda não possui uma conta?</span>
                    <Link to="/register">Cadastre-se</Link>
                </S.FormRegisterLink>
            </S.FormLogin>
        </FormStructure>
    )
}
