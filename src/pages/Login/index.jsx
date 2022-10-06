import * as S from './style'
import * as yup from 'yup'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormStructure } from '../../components/Form'
import { Error } from '../../components/Error'
import { toast } from 'react-toastify'
import { API } from '../../services/api'

export const Login = () => {

    const navigate = useNavigate()

    const FormSchema = yup.object({
        email: yup.string().required("Email obrigatório").email(),
        password: yup.string().required("Senha obrigatória")
    })

    const [typeInput, setTypeInput] = useState("password")
    const [passwordIconStatus, setPasswordIconStatus] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(FormSchema)
    })

    const onSubmitFormLogin = async (data) => {
        const { data: response } = await API.post('sessions', data)
            .catch(() => toast.error("Ops! Algo deu errado"))

        if (response) {
            const { token, user: { name, course_module } } = response
            localStorage.setItem("@hub:token", token)
            localStorage.setItem("@hub:name", name)
            localStorage.setItem("@hub:course_module", course_module)
            toast.success("Show. Manda Bala 🚀")
            setTimeout(() => {
                navigate("/dashboard")
            }, 2000)
        }
    }

    const toogleIconPassword = (type) => {
        setPasswordIconStatus((value) => !value)
        if (typeInput === "password") {
            setTypeInput("text")
        } else {
            setTypeInput("password")
        }
    }

    return (
        <FormStructure title="Kenzie Hub">
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
