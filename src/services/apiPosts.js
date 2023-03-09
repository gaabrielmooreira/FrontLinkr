import axios from "axios";
import { createConfig } from "./apiAuth";

async function getPostsByHashtag(hashtag,token) {
    const {data: res} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/hashtag/${hashtag}`, createConfig(token)); 
    return res
}

async function getPosts(token){
    const {data: res} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/posts`, createConfig(token)); 
    return res;
}

async function toggleLike(idPost,token){
    const body = {};
    return await axios.post(`${process.env.REACT_APP_API_BASE_URL}/posts/${idPost}/like`, body, createConfig(token));
}
async function updatePost(idPost, postDescription, token){
    const body = {postDescription};
    return await axios.put(`${process.env.REACT_APP_API_BASE_URL}/posts/${idPost}`, body, createConfig(token));
}

async function deletePost(idPost, token){
    return await axios.delete(`${process.env.REACT_APP_API_BASE_URL}/posts/${idPost}`, createConfig(token));
}

async function getPostsByUser(idUser, token){
    const {data: res} = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/user/${idUser}`,createConfig(token)) 
    return res
}

const apiPosts = {
    getPostsByHashtag,
    deletePost,
    updatePost,
    getPosts,
    toggleLike,
    getPostsByUser
}
export default apiPosts;