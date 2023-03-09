import axios from "axios";

function signUp(body) {
    return axios.post(`${process.env.REACT_APP_API_BASE_URL}/sign-up`, body);
}

function signOut(token) {
    axios.delete(`${process.env.REACT_APP_API_BASE_URL}/signout`,createConfig(token));
}

const apiAuth = {
    signUp,
    signOut,
}




export default apiAuth;

export function createConfig(token){
    return{
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}