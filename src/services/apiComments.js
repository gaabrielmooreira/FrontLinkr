import axios from "axios";
import { createConfig } from "./apiAuth";

async function insertComment(post, comment, token){
    const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/create-comment`, {idPost: post, comment}, createConfig(token));
    return data;
}

async function getAllComments(post, token){
    const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/get-comments/${post}`, createConfig(token));
    return data;
}

const apiComments = {
    insertComment,
    getAllComments
};
export default apiComments;