import axios from "axios";
import { createConfig } from "./apiAuth";

async function getUsers(string,token) {
    const {data: res} = await axios.get(`${process.env.REACT_APP_API_URL}/search/user/${string}`, createConfig(token)); 
    return res
}

const apiUsers = {
    getUsers,
}
export default apiUsers;