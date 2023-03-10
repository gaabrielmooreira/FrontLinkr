import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PostsMainSection from "../components/PostsMainSection/PostsMainSection"
import { AuthContext } from "../context/auth"
import apiPosts from "../services/apiPosts"


export default function UserPage(){
    const { idUser } = useParams()
    const [posts, setPosts] = useState(undefined)
    const { userAuth } = useContext(AuthContext)
    const [author, setAuthor] = useState(undefined)

    useEffect(()=>{
        try {
            const data = apiPosts.getPostsByUser(idUser, userAuth.token)
            data.then((res) => {
                setPosts(res)
                setAuthor(res[0].post_author)
            })
        } catch (error) {
            console.log(error.message)
        }
    },[idUser,userAuth.token])

    return(
        <PostsMainSection title={author} posts={!posts? 'carregando' : posts}/>
    )
}