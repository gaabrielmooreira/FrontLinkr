import styled from "styled-components";
import BaseScreen from "../BaseScreen/BaseScreen.js";
import Header from "../Header/Header.js";
import TrendingCard from "../TrendingsSection/TrendingsSection.js";
import { Post } from "../PostCard/Styled.js";
import PostCard from "../PostCard/PostCard.js";
import InsertPost from "../InsertPost/insertPost.js";
import { BiRefresh } from "react-icons/bi"
import RePostCard from "../RePostBox/RePostBox.js";



export default function PostsMainSection({ title, posts, postsAreChanged, setPostsAreChanged, newPostsAvailable, getNewPosts, toggleFollow, isFollowed, isFollowingOne, user_photo}) {
   
    return (
        <BaseScreen>
            <Header withSearch={true}></Header>
            <Main>
                <TitleConteiner isFollowed={isFollowed}>
                    <div>
                        {
                            user_photo && <PhotoUser src={user_photo} alt={title} />
                        }
                        <h1 data-test="hashtag-title">{title}</h1>
                    </div>
                    {toggleFollow && <button
                        data-test="follow-btn"
                        onClick={() => toggleFollow()}
                        disabled={isFollowed === "waiting"}
                    >
                        {isFollowed === "waiting" ? ". . ." : isFollowed ? "Unfollow" : "Follow"}
                    </button>}
                </TitleConteiner>
                <Section>
                    <ul>
                        {title === "timeline" && <InsertPost postsAreChanged={postsAreChanged} setPostsAreChanged={setPostsAreChanged} />}
                        {(newPostsAvailable > 0) &&
                            <ButtonNewPosts data-test="load-btn" onClick={() => getNewPosts()}>
                                <span>{newPostsAvailable} new posts, load more!</span>
                                <BiRefresh color="#FFF" size="22px" />
                            </ButtonNewPosts>
                        }
                        {posts === "carregando" ? 
                            <Post>Loading</Post>
                            :
                            posts.length === 0 ?
                                <NotFoundContainer data-test="message">
                                    {title === "timeline" ? 
                                        isFollowingOne ? "No posts found from your friends":"You don't follow anyone yet. Search for new friends!"
                                        :
                                        "There are no posts yet"
                                    }
                                </NotFoundContainer>
                                :
                                posts.map((el, i) =>{
                                    if(!el.re_post_id){
                                        return (
                                        <PostCard key={i} post={el} postsAreChanged={postsAreChanged} setPostsAreChanged={setPostsAreChanged} >
                                        </PostCard> )
                                    }else{
                                        return (
                                            <PostCard key={i} post={el} isRePost={true}> </PostCard>
                                        )
                                    }
                                    
                                    
                                    
                                })
                        }

                            
                    </ul>
                    <TrendingCard postsAreChanged={postsAreChanged} />
                </Section>
            </Main>
        </BaseScreen >
    )
}

const Main = styled.div`
    width:calc(611px + 25px + 301px);
    `
const TitleConteiner = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 10px;
    div {
        display:flex;
        align-items:center;
        gap: 20px;
    }
    h1 {
        font-family: 'Oswald';
        font-weight: 700;
        font-size: 43px;
        line-height: 64px;
    }
    button {
    width: 112px;
    height: 31px;
    background: ${props => props.isFollowed ? 'white' : `#1877F2`};
    border-color:${props => props.isFollowed ? 'white' : `#1877F2`};
    border-radius: 5px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color:${props => props.isFollowed ? `#1877F2` : 'white'};
    &:hover{
        cursor: pointer;
    }
    &:disabled{

        background-color: dimgrey;
        color: linen;
    }
    }

`

const PhotoUser = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
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

const NotFoundContainer = styled.p`
    width: 611px;
    color: #FFFFFF;
    font-size: 27px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
`
