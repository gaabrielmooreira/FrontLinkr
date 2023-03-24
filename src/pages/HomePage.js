import PostsMainSection from "../components/PostsMainSection/PostsMainSection";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.js";
import apiPosts from "../services/apiPosts.js";
import useInterval from "use-interval";
import apiFollow from "../services/apiFollow";

export default function HomePage() {
    const [posts, setPosts] = useState(undefined);
    const [newPostsAvailable, setNewPostsAvailable] = useState(0);
    const [postsAreChanged, setPostsAreChanged] = useState(false);
    const { userAuth } = useContext(AuthContext);
    const [dateOfLastUpdate, setDateOfLastUpdate] = useState('');
    const [isFollowingOne, setIsFollowingOne] = useState();

    const [hasMorePosts, setHasMorePosts] = useState(true);
    const [startIndex, setStartIndex] = useState(0);
    const [visiblePosts, setVisiblePosts] = useState(undefined)
   
   
    

    useEffect(() => {
        async function getData() {
            try {
                const data = await apiPosts.getPostsAndRePosts(userAuth.token);
                setPosts(data);
                const visiblePosts = data.slice(0,10)
                setVisiblePosts(visiblePosts);
                setDateOfLastUpdate(Date.now());
                
                
            } catch {
                alert('An error occured while trying to fetch the posts, please refresh the page');
            } 
        }
        async function getFollowingOne() {
            try {
                const isFollowingAtLeastOne = await apiFollow.followingAtLeastOne(userAuth.token);
                setIsFollowingOne(isFollowingAtLeastOne);
            } catch (err) {
                console.log(err.message);
            }
        }
        getData();
        getFollowingOne();
    }, [postsAreChanged])

    useInterval(async () => {
        try {
            const data = await apiPosts.getPostsAndRepostsAfterDate(dateOfLastUpdate, userAuth.token);
            const newPostsLength = data.length;
            setNewPostsAvailable(newPostsLength);
        } catch (err) {
            console.log(err);
        }
    }, 15000);

    const getNewPosts = async () => {
        try {
            const data = await apiPosts.getPostsAndRepostsAfterDate(dateOfLastUpdate, userAuth.token);
            const arrNewPosts = [...data, ...posts];
            setPosts(arrNewPosts);
            setDateOfLastUpdate(Date.now());
            setNewPostsAvailable(0);
        } catch (err) {
            console.log(err);
        }
    }

  
    function getMorePosts() {
        if (posts.length - startIndex <= 0){
            setHasMorePosts(false);
        } else{
          let novo = posts.slice(0, startIndex + 10);
            setVisiblePosts(novo);
            setStartIndex(novo.length);
        }
    }

    console.log(visiblePosts)
       
    
   

    return (
        <>
            <PostsMainSection
                title={'timeline'}
                posts={!visiblePosts ? 'carregando' : visiblePosts}
                postsAreChanged={postsAreChanged}
                setPostsAreChanged={setPostsAreChanged}
                newPostsAvailable={newPostsAvailable}
                getNewPosts={getNewPosts}
                isFollowingOne={isFollowingOne}
                getMorePosts={getMorePosts}
                hasMorePosts={hasMorePosts}
                // visiblePosts={visiblePosts}
                // setVisiblePosts={setVisiblePosts}

            >
            </PostsMainSection>
        </>
    )
}