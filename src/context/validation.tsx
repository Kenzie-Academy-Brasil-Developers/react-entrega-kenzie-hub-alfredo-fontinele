import { createContext, ReactNode, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { API } from "../services/api"
import { toast } from 'react-toastify'

type ValidateUser = string | null

interface iInfoValidaty {
    email: string,
    password: string,
    name: string,
    bio: string,
    contact: string,
    course_module: string
}

interface layout {
    children: ReactNode
}

interface iToken {
    token: string
}

export const ValidationContext = createContext({})

export const ValidationProvider = ({ children }:layout) => {
    const [name, setName] = useState<ValidateUser>(null)
    const [course_module, setCourseModule] = useState<ValidateUser>(null)
    const navigate = useNavigate()

    const onSubmitFormLogin = async (dados:object) => {
        try {
            const { data } = await API.post('sessions', dados)
            const { token }:iToken = data
            localStorage.setItem("@hub:token", token)
            toast.success("Show. Manda Bala 🚀")
            navigate("/dashboard")
        } catch {
            toast.error("Ops! Algo deu errado")
        }
    }

    const onSubmitFormRegister = async ({ email, password, name, bio, contact, course_module }: iInfoValidaty) => {
        try {
            const info = {
                email: email,
                password: password,
                name: name,
                bio: bio,
                contact: contact,
                course_module: course_module
            }
            await API.post('users', info)    
            toast.success("Conta Criada com Sucesso")
            navigate("/")
        } catch {
            toast.error("Ops! Algo deu errado")
        }
    }

    const getUserData = async(token:string) => {
        const { data } = await API.get(`profile`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        return data
    }

    const getUserTechs = async(token:string) => {
        const { data } = await API.get(`profile`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        const { techs: technologies } = data
        return technologies
    }

    const verifyAuthUser = async () => {
        const token = localStorage.getItem("@hub:token")
        if (token) {
            const data = await getUserData(token)
            const { name:nome, course_module: curso } = data
            setName(nome)
            setCourseModule(curso)
        } else {
            navigate("/")
        }
    }

    return (
        <ValidationContext.Provider
            value={{ navigate, verifyAuthUser, name, setName, course_module, setCourseModule, getUserData, getUserTechs, onSubmitFormLogin, onSubmitFormRegister }}>
            {children}
        </ValidationContext.Provider>
    )
}

export const useValidation:Function = () => useContext(ValidationContext)