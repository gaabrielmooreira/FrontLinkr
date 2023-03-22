import PostsMainSection from "../components/PostsMainSection/PostsMainSection";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.js";
import apiPosts from "../services/apiPosts.js";
import useInterval from "use-interval";

export default function HomePage() {
    const [posts, setPosts] = useState([]);
    const [newPostsAvailable, setNewPostsAvailable] = useState(0);
    const [postsAreChanged, setPostsAreChanged] = useState(false);
    const { userAuth } = useContext(AuthContext);
    const [dateOfLastUpdate, setDateOfLastUpdate] = useState('');

    useEffect(() => {
        async function getData() {
            try {
                const data = await apiPosts.getPosts(userAuth.token);
                setPosts(data);
                setDateOfLastUpdate(Date.now());
            } catch {
                alert('An error occured while trying to fetch the posts, please refresh the page');
            }
        }
        getData();
    }, [postsAreChanged])

    useInterval(async () => {
        try {
            const data = await apiPosts.getPostsAfterDate(dateOfLastUpdate, userAuth.token);
            const newPostsLength = data.length;
            console.log(newPostsLength);
            setNewPostsAvailable(newPostsLength);
        } catch (err) {
            console.log(err);
        }
    }, 15000);

    const getNewPosts = async () => {
        try {
            const data = await apiPosts.getPostsAfterDate(dateOfLastUpdate, userAuth.token);
            const arrNewPosts = [...data, ...posts];
            setPosts(arrNewPosts);
            setDateOfLastUpdate(Date.now());
            setNewPostsAvailable(0);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <PostsMainSection 
            title={'timeline'} 
            posts={!posts ? 'carregando' : posts} 
            postsAreChanged={postsAreChanged} 
            setPostsAreChanged={setPostsAreChanged}
            newPostsAvailable={newPostsAvailable}
            getNewPosts={getNewPosts}
        >
        </PostsMainSection>
    )
}