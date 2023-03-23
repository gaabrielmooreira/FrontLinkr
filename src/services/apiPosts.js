import axios from "axios";
import { createConfig } from "./apiAuth";

async function getPostsByHashtag(hashtag, token) {
    const { data: res } = await axios.get(`${process.env.REACT_APP_API_URL}/hashtag/${hashtag}`, createConfig(token));
    return res
}

async function getPosts(token) {
    const { data: res } = await axios.get(`${process.env.REACT_APP_API_URL}/posts`, createConfig(token));
    return res;
}

async function getPostsAfterDate(date, token) {
    const { data: res } = await axios.get(`${process.env.REACT_APP_API_URL}/posts/since/${date}`, createConfig(token));
    return res;
}

async function toggleLike(idPost, token) {
    const body = {};
    return await axios.post(`${process.env.REACT_APP_API_URL}/posts/${idPost}/like`, body, createConfig(token));
}
async function updatePost(idPost, postDescription, token) {
    const body = { postDescription };
    return await axios.put(`${process.env.REACT_APP_API_URL}/posts/${idPost}`, body, createConfig(token));
}

async function deletePost(idPost, token) {
    return await axios.delete(`${process.env.REACT_APP_API_URL}/posts/${idPost}`, createConfig(token));
}

async function getPostsByUser(idUser, token) {
    const { data: res } = await axios.get(`${process.env.REACT_APP_API_URL}/user/${idUser}`, createConfig(token))
    return res
}

async function insertPost(description, link, token) {
    const body = { description, link }
    return await axios.post(`${process.env.REACT_APP_API_URL}/create-post`, body, createConfig(token))
}

async function insertRePost(idPost, token){
    const body ={idPost}
    return await axios.post(`${process.env.REACT_APP_API_URL}/re-post`, body, createConfig(token))
}

async function getRePostCount(idPost){
    return await axios.get(`${process.env.REACT_APP_API_URL}/re-post/${idPost}`)
}

async function getPostsAndRePosts(token){
    const { data: res } = await axios.get(`${process.env.REACT_APP_API_URL}/post-reposts`, createConfig(token))
    return res
}

const apiPosts = {
    getPostsByHashtag,
    deletePost,
    updatePost,
    getPosts,
    toggleLike,
    getPostsByUser,
    insertPost,
    insertRePost,
    getRePostCount,
    getPostsAfterDate,
    getPostsAndRePosts
}
export default apiPosts;