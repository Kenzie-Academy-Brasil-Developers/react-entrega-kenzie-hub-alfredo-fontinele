import { createContext, ReactNode, useState, useContext, Dispatch, SetStateAction } from "react"
import { useNavigate, NavigateFunction } from "react-router-dom"
import { API } from "../services/api"
import { toast } from 'react-toastify'

type Token = string | boolean | null

type MyState = string | boolean | undefined

export interface ILayout {
    children: ReactNode
}

export interface IValidToken {
    token: string
}

interface ITechData {
    id: string
    status: string
    title: string
}

interface ITechValid {
    techs: ITechData[]
}

interface IDataRegister {
    email: string,
    password: string,
    name: string,
    bio: string,
    contact: string,
    course_module: string
}

interface IDataLogin {
    user: object
    token: string
}

interface IUserData {
    name: string
    course_module: string
}

interface IValidationProviderData {
    name: MyState
    courseModule: MyState
    setName: Dispatch<SetStateAction<MyState>>
    setCourseModule: Dispatch<SetStateAction<MyState>>
    navigate: NavigateFunction
    setDataUser: () => Promise<void>
    getToken: () => Token
    getUserData: (token: string) => Promise<IUserData>
    getUserTechs: (token: string) => Promise<ITechData[]>
    onSubmitFormLogin: (dados: IDataLogin) => Promise<void>
    onSubmitFormRegister: (dados: IDataRegister) => Promise<void>
}

export const ValidationContext = createContext({} as IValidationProviderData)

export const ValidationProvider = ({ children }:ILayout) => {
    const [name, setName] = useState<MyState>("")
    const [courseModule, setCourseModule] = useState<MyState>("")
    const navigate = useNavigate()

    const onSubmitFormLogin = async (dados:IDataLogin) => {
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
    }: IDataRegister) => {
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

    const getUserData = async(token:string):Promise<IUserData> => {
        const { data } = await API.get<IUserData>(`profile`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        return data
    }
    
    const getUserTechs = async(token:string):Promise<ITechData[]> => {
        const { data: { techs } } = await API.get<ITechValid>(`profile`, {
            headers: { "Authorization": `Bearer ${token}` }
        })
        return techs
    }

    const getToken = ():Token => {
        const token:Token = localStorage.getItem("@hub:token")
        if (!token) {
            return false
        }
        return token
    }

    const setDataUser = async():Promise<void> => {
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
            value={{ setName, setCourseModule, navigate, setDataUser, getToken, getUserData, getUserTechs, onSubmitFormLogin, onSubmitFormRegister, name, courseModule }}>
            {children}
        </ValidationContext.Provider>
    )
}

export const useValidation:Function = () => useContext(ValidationContext)