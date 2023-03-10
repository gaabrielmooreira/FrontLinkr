import PostsMainSection from "../components/PostsMainSection/PostsMainSection";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.js";
import apiPosts from "../services/apiPosts.js";

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    const [postsAreChanged, setPostsAreChanged] = useState(false);
    const { userAuth } = useContext(AuthContext);

    useEffect(() => {
        async function getData() {
            try{
                const data = await apiPosts.getPosts(userAuth.token);
                setPosts(data);
            } catch {
                alert('An error occured while trying to fetch the posts, please refresh the page');
            }
        }
        getData();
    }, [postsAreChanged])

    return (
        <PostsMainSection title={'timeline'} posts={!posts? 'carregando' : posts} postsAreChanged={postsAreChanged} setPostsAreChanged={setPostsAreChanged}>
        </PostsMainSection>
    )
}