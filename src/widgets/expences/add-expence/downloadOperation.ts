import {API_URL} from "../../../shared/constants";
import axios from "axios";

export interface Operation {
    date: string,
    category: string,
    name: string,
    value: number
}

export async function downloadOperation(operation: Operation): Promise<void> {
    // await axios.post(`${API_URL}`, operation)
}