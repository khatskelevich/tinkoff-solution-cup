import {API_URL} from "../../../shared/constants";
import axios from "axios";

export interface Operation {
    date: string,
    category: string,
    name: string,
    value: number
}

export async function downloadOperation(id: string | number, operation: Operation): Promise<void> {
    await axios.post(`${API_URL}/:${id}/operation.json`, operation).catch(e => {console.log(e)})
}