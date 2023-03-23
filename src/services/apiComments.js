import axios from "axios";
import { createConfig } from "./apiAuth";

async function insertComment(comment, token){
return await axios.post(`${process.env.REACT_APP_API_URL}/create-comment`, comment, createConfig(token));
}

async function getAllComments(token){
    const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/get-all-comments`, createConfig(token))
    return data;
}

const apiComments = {
    insertComment,
    getAllComments
};
export default apiComments;