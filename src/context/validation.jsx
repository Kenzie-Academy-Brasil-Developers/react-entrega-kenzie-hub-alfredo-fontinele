import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { API } from "../services/api"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ValidationContext = createContext({})

export const ValidationProvider = ({ children }) => {

    const [typeInput, setTypeInput] = useState("password")
    const [passwordIconStatus, setPasswordIconStatus] = useState(false)

    const navigate = useNavigate()

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

    const toogleIconPassword = (type) => {
        setPasswordIconStatus((value) => !value)
        if (typeInput === "password") {
            setTypeInput("text")
        } else {
            setTypeInput("password")
        }
    }

    return (
        <ValidationContext.Provider 
            value={{ navigate, typeInput, passwordIconStatus, onSubmitFormLogin, onSubmitFormRegister, toogleIconPassword }}>
            {children}
        </ValidationContext.Provider>
    )
}