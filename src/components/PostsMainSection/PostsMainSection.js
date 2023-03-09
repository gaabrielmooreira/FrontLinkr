import styled from "styled-components";
import BaseScreen from "../BaseScreen/BaseScreen.js";
import Header from "../Header/Header.js";
import TrendingCard from "../TrendingsSection/TrendingsSection.js";
import { Post } from "../PostCard/Styled.js";
import PostCard from "../PostCard/PostCard.js";

export default function PostsMainSection({ title, posts, postsAreChanged, setPostsAreChanged }) {
    return (
        <BaseScreen>
            <Header></Header>
            <Main>
                <h1> {title}</h1>
                <Section>
                    <ul>
                        {!posts || posts==="carregando"? <Post>Carregando . . .</Post> :
                        posts.map((el) =>
                            <PostCard key={el.id} post={el} postsAreChanged={postsAreChanged} setPostsAreChanged={setPostsAreChanged}>
                            </PostCard>)
                        }

                    </ul>
                    <TrendingCard></TrendingCard>
                </Section>

            </Main>
        </BaseScreen>
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