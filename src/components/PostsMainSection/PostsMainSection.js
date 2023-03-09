import styled from "styled-components";
import BaseScreen from "../BaseScreen/BaseScreen.js";
import Header from "../Header/Header.js";
import TrendingCard from "../TrendingsSection/TrendingsSection.js";
import { BLACK } from "../../constants/COLORS.js";
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";


export default function PostsMainSection({ title, posts }) {
    const navigate = useNavigate()
    return (
        <BaseScreen>
            <Header></Header>
            <Main>
                <h1> {title}</h1>
                <Section>
                    <ul>
                        {!posts || posts === "carregando" ? <Post>Carregando . . .</Post> :
                            posts.map((el, i) =>
                                <Post key={i}>
                                    <ReactTagify colors={"white"}
                                        tagClicked={(tag) => navigate(`/trending/hashtag/${tag.slice(1)}`)}>

                                        <p>{el.post_description}</p>

                                    </ReactTagify>
                                    <p>{el.like_count}</p>
                                    <p>{el.liked_by?.join(", ")}</p>
                                    <p>{el.post_link}</p>
                                    <p>{el.photo_author}</p>
                                    <p>{el.user_liked ? "curtiu" : "não curtiu"}</p>
                                    <p>{el.post_author}</p>
                                </Post>)
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
const Post = styled.li`
    width:611px;
    margin-bottom: 29px;
    min-height:276px;
    border-radius:16px;
    padding:20px;
    background-color: ${BLACK}
    
`