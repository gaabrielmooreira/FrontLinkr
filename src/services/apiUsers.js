import axios from "axios";
import { createConfig } from "./apiAuth";

async function getUsers(token,string) {
    const {data: res} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/users/search/${string}`, createConfig(token)); 
    return res
}

const apiUsers = {
    getUsers,
}
export default apiUsers;