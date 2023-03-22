import styled from "styled-components";
import BaseScreen from "../BaseScreen/BaseScreen.js";
import Header from "../Header/Header.js";
import TrendingCard from "../TrendingsSection/TrendingsSection.js";
import { Post } from "../PostCard/Styled.js";
import PostCard from "../PostCard/PostCard.js";
import InsertPost from "../InsertPost/insertPost.js";
import {BiRefresh} from "react-icons/bi"

export default function PostsMainSection({ title, posts, postsAreChanged, setPostsAreChanged, newPostsAvailable, getNewPosts }) {
    return (
        <BaseScreen>
            <Header withSearch={true}></Header>
            <Main>
                <h1 data-test="hashtag-title">{title}</h1>
                <Section>
                    <ul>
                        {title === "timeline" && <InsertPost postsAreChanged={postsAreChanged} setPostsAreChanged={setPostsAreChanged} />}
                        {(newPostsAvailable > 0) && 
                            <ButtonNewPosts onClick={() => getNewPosts()}>
                                <span>{newPostsAvailable} new posts, load more!</span>
                                <BiRefresh color="#FFF" size="22px"/>
                            </ButtonNewPosts>
                        }
                        {posts === "carregando" ?
                            <Post>Loading</Post>
                            :
                            posts.length === 0 ? 
                                <Post data-test="message">There are no posts yet</Post>
                                :
                                posts.map((el) =>
                                    <PostCard key={el.id} post={el} postsAreChanged={postsAreChanged} setPostsAreChanged={setPostsAreChanged}>
                                    </PostCard>)
                        }
                    </ul>
                    <TrendingCard postsAreChanged={postsAreChanged}/>
                </Section>
            </Main>
        </BaseScreen >
    )
}

const Main = styled.div`
    width:calc(611px + 25px + 301px);
    h1 {
        font-family: 'Oswald';
        font-weight: 700;
        font-size: 43px;
        line-height: 64px;
    }
`
const Section = styled.div`
    width:100%;
    margin-top:43px;
    display:flex;
    gap:25px;
`

const ButtonNewPosts = styled.button`
    width: 611px;
    height: 61px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: #1877F2;
    span {
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #FFFFFF;
        margin-right: 14px;
    }
    border-radius: 16px;
    margin-bottom: 17px;
    &:hover{
        cursor: pointer;
    }
`
