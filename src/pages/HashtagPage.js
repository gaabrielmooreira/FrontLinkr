import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostsMainSection from "../components/PostsMainSection/PostsMainSection";
import apiPosts from "../services/apiPosts";

export default function HashtagPage() {
    const { hashtag } = useParams()
    const [posts, setPosts] = useState(undefined)
    useEffect(() => {
        try {
            const data = apiPosts.getPostsByHashtag(hashtag, 'eb8cabb1-5a8e-4794-99e9-277278bf1634')
            data.then((res) => setPosts(res))
        } catch (error) {
            console.log(error.message)
        }
    }, [hashtag])
    return (
        <PostsMainSection title={'# ' + hashtag} posts={!posts? 'carregando' : posts}/>
    )
}
