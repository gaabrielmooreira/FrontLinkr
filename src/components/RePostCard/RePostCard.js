import { Repost } from "./Styled";
import PostCard from "../PostCard/PostCard.js";

export default function RePostCard({ post }) {
    const { re_posted_by } = post;
    return (
        <>
            <Repost><p>{`re posted by ${re_posted_by}`}</p></Repost>
            <PostCard post={post} isRePost={true}></PostCard>
        </>
    )
}