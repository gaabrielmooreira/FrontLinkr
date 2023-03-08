import { useParams } from "react-router-dom";
import PostsMainSection from "../components/PostsMainSection/PostsMainSection";

export default function HashtagPage(){
    const {hashtag} = useParams()
    return (
        <PostsMainSection title={'# ' + hashtag}></PostsMainSection>
    )
}
