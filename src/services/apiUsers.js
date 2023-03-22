import axios from "axios";
import { createConfig } from "./apiAuth";

async function getUsersByString(string,token) {
    const {data: res} = await axios.get(`${process.env.REACT_APP_API_URL}/search/user/${string}`, createConfig(token)); 
    return res
}

async function getUserByID(id_user_searched,token) {
    const {data: res} = await axios.get(`${process.env.REACT_APP_API_URL}/search/id/${id_user_searched}`, createConfig(token)); 
    return res
}

const apiUsers = {
    getUsersByString,
    getUserByID
}
export default apiUsers;