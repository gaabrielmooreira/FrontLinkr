import axios from "axios";
import { createConfig } from "./apiAuth";

async function getPostsByHashtag(hashtag,token) {
    const {data: res} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/hashtag/${hashtag}`, createConfig(token)); 
    return res
}

const apiPosts = {
    getPostsByHashtag,
}
export default apiPosts;