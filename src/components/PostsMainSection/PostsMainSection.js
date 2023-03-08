import styled from "styled-components";
import BaseScreen from "../BaseScreen/BaseScreen.js";
import Header from "../Header/Header.js";
import TrendingCard from "../TrendingsSection/TrendingsSection.js";
import { BLACK } from "../../constants/COLORS.js";

export default function PostsMainSection({title}){
    return (
        <BaseScreen>
            <Header></Header>
            <Main>
                <h1> {title}</h1>
                <Section>
                    <ul>
                        <Post></Post>
                        <Post></Post>
                        <Post></Post>
                        <Post></Post>

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
    background-color: ${BLACK}
`