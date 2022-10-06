import { API } from "./api"

export const ControlApi = {
    async getUsers(page, setDataInfo) {
        const { data } = await API.get(`users?perPage=15&page=${page}`)
        setDataInfo(data)
    }
}
