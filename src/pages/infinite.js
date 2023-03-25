import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroller";
import PostCard from "../components/PostCard/PostCard.js";
import BaseScreen from "../components/BaseScreen/BaseScreen.js";
import { AuthContext } from "../context/auth.js";
import apiPosts from "../services/apiPosts.js";

export default function Infinite() {
  const [posts, setPosts] = useState(undefined);
  const { userAuth } = useContext(AuthContext);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const [visiblePosts, setVisiblePosts] = useState(undefined);


  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const data = await apiPosts.getPostsAndRePosts(userAuth.token);
  //       console.log(data)
  //       setPosts(data);
  //       const visiblePosts = data.slice(0,10)
  //       setVisiblePosts(visiblePosts);
  //     } catch {
  //       alert(
  //         "An error occured while trying to fetch the posts, please refresh the page"
  //       );
  //     }
  //   }
  //   getData();

  // }, []);

  // function getMorePosts() {
  //   const nextIndex = startIndex + 10;
  //   console.log(nextIndex, posts.length);
  //   if (nextIndex >= posts.length) {
  //     setHasMorePosts(false);
  //   } else {
  //     setHasMorePosts(true);
  //     const novo = posts.slice(0, nextIndex);
  //     setVisiblePosts(novo);
  //     setStartIndex(nextIndex);
  //   }
  // }

  // console.log(posts);
  // console.log(visiblePosts);

  return (
    <BaseScreen>
      <ul>
        {/* <InfiniteScroll
          pageStart={0}
          loadMore={getMorePosts}
          hasMore={hasMorePosts}
          loader={<Teste>Carregando...</Teste>}
        >
          {posts.map((el, i) => {
            if (!el.re_post_id) {
              return <PostCard key={i} post={el}></PostCard>;
            } else {
              return (
                <PostCard key={i} post={el} isRePost={true}>
                  {" "}
                </PostCard>
              );
            }
          })}
        </InfiniteScroll> */}

        {posts.map((el, i) => {
            if (!el.re_post_id) {
              return <PostCard key={i} post={el}></PostCard>;
            } else {
              return (
                <PostCard key={i} post={el} isRePost={true}>
                  {" "}
                </PostCard>
              );
            }
          })}




      </ul>
    </BaseScreen>
  );
}


const Teste = styled.h1`
    font-size: 50px;
    color: #FFFFFF;

`