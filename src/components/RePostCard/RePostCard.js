import { Repost } from "./Styled";
import PostCard from "../PostCard/PostCard.js";
import { useEffect } from "react";

export default function RePostCard ({post}){
    const { re_post_id, post_id, post_author_id, post_author, photo_author,
        post_description, post_link, liked_by, user_liked,
        likes_count, post_link_title, post_link_description, post_link_image,re_posted_by } = post;

        const post2 = {id:post_id, post_author_id, post_author, photo_author,
            post_description, post_link, liked_by, user_liked,
            likes_count, post_link_title, post_link_description, post_link_image
        }
    return(
        <>
        <Repost><p>{`re posted by ${re_posted_by}`}</p></Repost>
        <PostCard post={post2} isRePost={true}></PostCard>
        </>
        
        
        
        
    )
}