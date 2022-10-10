import { createContext } from "react"
import { useNavigate } from "react-router-dom"
import { API } from "../services/api"
import { toast } from 'react-toastify'

export const ValidationContext = createContext({})

export const ValidationProvider = ({ children }) => {
    const navigate = useNavigate()

    const onSubmitFormLogin = async (data) => {
        const { data: response } = await API.post('sessions', data)
            .catch(() => toast.error("Ops! Algo deu errado"))
        if (response) {
            const { token } = response
            localStorage.setItem("@hub:token", token)
            toast.success("Show. Manda Bala 🚀")
            setTimeout(() => {
                navigate("/dashboard")
            }, 1000)
        }
    }

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
        <ValidationContext.Provider
            value={{ navigate, onSubmitFormLogin, onSubmitFormRegister }}>
            {children}
        </ValidationContext.Provider>
    )
}
