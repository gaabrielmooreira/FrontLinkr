import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostsMainSection from "../components/PostsMainSection/PostsMainSection";
import { AuthContext } from "../context/auth";
import apiPosts from "../services/apiPosts";

export default function HashtagPage() {
    const { hashtag } = useParams()
    const [posts, setPosts] = useState(undefined)
    const { userAuth } = useContext(AuthContext)
    const [visiblePosts, setVisiblePosts] = useState(undefined)

    useEffect(() => {
        try {
            const data = apiPosts.getPostsByHashtag(hashtag, userAuth.token)
            data.then((res) => {setPosts(res)
                const visiblePosts = res.slice(0,10)
                setVisiblePosts(visiblePosts);}
            )
        } catch (error) {
            console.log(error.message)
        }
    }, [hashtag,userAuth.token])

    //console.log(visiblePosts)

    return (
        <PostsMainSection title={'# ' + hashtag} 
        posts={!posts? 'carregando' : posts}
        visiblePosts={visiblePosts}
        setVisiblePosts={setVisiblePosts}
        
        />
    )
}
