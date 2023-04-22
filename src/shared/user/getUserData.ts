import axios from 'axios'
import {API_URL} from '../constants'
import {User} from "./User";

export async function getUserData(): Promise<User> {
    const response = await axios.get<User>(`${API_URL}/main.json`)
    return response.data
}