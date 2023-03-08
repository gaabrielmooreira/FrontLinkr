import axios from "axios";
import { createConfig } from "./apiAuth";

async function getTrendings(token) {
    const {data: res} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/trends`, createConfig(token)); 
    return res
}

const apiTrending = {
    getTrendings,
}
export default apiTrending;