import { createContext, ReactNode, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { API } from "../services/api"
import { toast } from 'react-toastify'

type Token = string | boolean | null

type State = string | boolean

export interface ILayout {
    children: ReactNode
}

export interface IValidToken {
    token: string
}

interface IInfoValidaty {
    email: string,
    password: string,
    name: string,
    bio: string,
    contact: string,
    course_module: string
}

interface IData {
    user: object
    token: string
}

interface IUserData {
    name: string
    course_module: string
}

interface ITechData {
    technologies: []
}

interface IValidationProviderData {
    name: State
    setName: Function
    courseModule: State
    setCourseModule: Function
    navigate: Function
    setDataUser: Function
    getToken: Function
    getUserData: Function
    getUserTechs: Function
    onSubmitFormLogin: Function
    onSubmitFormRegister: Function
}

export const ValidationContext = createContext({} as IValidationProviderData)

export const ValidationProvider = ({ children }:ILayout) => {
    const [name, setName] = useState<State>("")
    const [courseModule, setCourseModule] = useState<State>("")
    const navigate = useNavigate()

    const onSubmitFormLogin = async (dados:IData) => {
        try {
            const { data } = await API.post('sessions', dados)
            const { token }:IValidToken = data
            localStorage.setItem("@hub:token", token)
            toast.success("Show. Manda Bala 🚀")
            navigate("/dashboard")
        } catch {
            toast.error("Ops! Algo deu errado")
        }
    }

    const onSubmitFormRegister = async ({ 
        email, password, name, bio, contact, course_module 
    }: IInfoValidaty) => {
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

    //Promise<IUserData> //Tipando o retorno
    const getUserData = async(token:string):Promise<IUserData> => {
        const { data: { name, course_module } } = await API.get(`profile`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        const result:IUserData = {
            name: name,
            course_module: course_module
        }
        return result
    }

    //Promise<ITechData> //Tipando o retorno
    const getUserTechs = async(token:string):Promise<ITechData> => {
        const { data } = await API.get(`profile`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        const { techs } = data
        return techs
    }

    //Tipagens de Token
    const getToken = () => {
        const token:Token = localStorage.getItem("@hub:token")
        if (!token) {
            return false
        }
        return token
    }

    const setDataUser = async() => {
        const token:Token = localStorage.getItem("@hub:token")
        if (token) {
            const data = await getUserData(token)
            const { name, course_module } = data
            setName(name)
            setCourseModule(course_module)
        }
    }

    return (
        <ValidationContext.Provider
            value={{ navigate, setDataUser, getToken, name, setName, courseModule, setCourseModule, getUserData, getUserTechs, onSubmitFormLogin, onSubmitFormRegister }}>
            {children}
        </ValidationContext.Provider>
    )
}

export const useValidation:Function = () => useContext(ValidationContext)