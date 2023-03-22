import axios from "axios";
import { createConfig } from "./apiAuth";

async function follow(token,followed_user_id) {
    const {data: res} = await axios.post(`${process.env.REACT_APP_API_URL}/follow/${followed_user_id}`,{},createConfig(token)); 
    return res
}

async function unfollow(token,followed_user_id) {
    const {data: res} = await axios.delete(`${process.env.REACT_APP_API_URL}/unfollow/${followed_user_id}`,createConfig(token)); 
    return res
}
async function isFollowed(token,followed_user_id) {
    const {data: res} = await axios.get(`${process.env.REACT_APP_API_URL}/follow/${followed_user_id}`,createConfig(token)); 
    return res
}
const apiFollow = {
    follow,
    unfollow,
    isFollowed
}
export default apiFollow;