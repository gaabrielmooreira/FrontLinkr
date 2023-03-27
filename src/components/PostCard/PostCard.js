import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/auth";
import apiPosts from "../../services/apiPosts";
import DeleteButton from "../DeleteButton/DeleteButton";
import { ContainerGlobal, EditIcon, Heart, HeartTransparent, LeftContainer, LinkContainer, Post, PostText, ReactionContainer, RightContainer, RightTopContainer, TooltipContainer } from "./Styled";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";
import RepeatIcon from "../RepeatIcon/RepeatIcon";
import CommentIcon from "../CommentIcon/CommentIcon";
import CommentsBox from "../CommentsBox/CommentsBox";
import RePostBox from "../RePostBox/RePostBox";

export default function PostCard({ post, postsAreChanged, setPostsAreChanged, isRePost, deleteFromVisible, updatePostFromVisible, updateLikeFromVisible }) {
    const { post_id, post_author_id, post_author, photo_author,
        post_description, post_link, liked_by, user_liked,
        likes_count, post_link_title, post_link_description, post_link_image } = post;

    const { userAuth } = useContext(AuthContext);

    const [likesDescription, setLikesDescription] = useState("");
    const [likesChanged, setLikesChanged] = useState(false);

    const [isEditing, setIsEditing] = useState(false);
    const [isConfirmingEdit, setIsConfirmingEdit] = useState(false);
    const [descriptionInput, setDescriptionInput] = useState("");
    const inputRef = useRef(null);

    const [numberComments, setNumberComments] = useState(0);
    const [showComments, setShowComments] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        function toolTipDescription() {
            if (!Number(likes_count)) return setLikesDescription("");

            if (!user_liked) {
                if (liked_by && Number(likes_count) === 1) return setLikesDescription(`${liked_by[0]}`);
                if (liked_by && Number(likes_count) === 2) return setLikesDescription(`${liked_by[0]} e ${liked_by[1]}`);
                if (liked_by && Number(likes_count) > 2) return setLikesDescription(`${liked_by[0]}, ${liked_by[1]} e outras ${Number(likes_count) - 2} pessoas`);
            } else {
                if (Number(likes_count) === 1) return setLikesDescription(`${userAuth.name}`);
                if (Number(likes_count) === 2) return setLikesDescription(`${userAuth.name} e ${liked_by[0]}`);
                if (Number(likes_count) > 2) return setLikesDescription(`${userAuth.name}, ${liked_by[0]} e outras ${Number(likes_count) - 2} pessoas`);
            }
        }
        toolTipDescription();
    }, [likesChanged]);

    useEffect(() => {
        if (isEditing) inputRef.current.focus();
    }, [isEditing]);

    const handleLike = async () => {
        try {
            await apiPosts.toggleLike(post_id, userAuth.token);
            updateLikeFromVisible(post_id, user_liked, likes_count);
            setLikesChanged(!likesChanged)
        } catch (error) {
            console.log(error);
        }

    }

    const openEdit = () => {
        setDescriptionInput(post_description)
        setIsEditing(true);
    }

    const cancelEdit = () => {
        setDescriptionInput(post_description);
        setIsEditing(false);
    }

    function goToUserPage() {
        return navigate(`/user/${post_author_id}`)
    }

    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            setIsConfirmingEdit(true);
            try {
                await apiPosts.updatePost(post_id, descriptionInput, userAuth.token);
                updatePostFromVisible(post_id, descriptionInput);
                setIsConfirmingEdit(false);
                setIsEditing(false);
            } catch (error) {
                setIsConfirmingEdit(false);
                alert("Não foi possivel salvar as alterações.");
                console.log(error);
            }
        }
        if (event.key === 'Escape') cancelEdit();
    }

    return (
        <ContainerGlobal>
            <RePostBox re_posted_by={post.re_posted_by} isRePost={isRePost} />

            <Post data-test="post">
                <LeftContainer>
                    <img src={photo_author} onClick={goToUserPage} alt="foto-perfil" />
                    <ReactionContainer>
                        {user_liked ? <Heart onClick={handleLike} data-test="like-btn" /> : <HeartTransparent data-test="like-btn" onClick={handleLike} />}

                        <TooltipContainer data-tooltip-id="my-tooltip" data-tooltip-content={likesDescription}>
                            <p data-test="counter" >{likes_count > 1 ? `${likes_count} likes` : `${likes_count} like`}</p>
                        </TooltipContainer>
                        <div data-test="tooltip">
                            <Tooltip
                                id="my-tooltip"
                                place="bottom"
                                style={{ backgroundColor: "rgba(255,255,255,0.9)", color: "#505050" }}
                            />
                        </div>
                        <CommentIcon number={numberComments} showComments={showComments} setShowComments={setShowComments} />

                        <RepeatIcon idPost={post_id} postsAreChanged={postsAreChanged} setPostsAreChanged={setPostsAreChanged} />
                    </ReactionContainer>
                </LeftContainer>

                <RightContainer>
                    <RightTopContainer>
                        <h2 data-test="username" onClick={goToUserPage}>{post_author}</h2>

                        {
                            (post_author_id === userAuth.id && !isRePost) &&
                            <div>
                                <EditIcon
                                    onClick={() => isEditing ? cancelEdit() : openEdit()}
                                    color='#FFF'
                                    size='20px'
                                    data-test="edit-btn"
                                />

                                <DeleteButton idPost={post_id} postsAreChanged={postsAreChanged} setPostsAreChanged={setPostsAreChanged} deleteFromVisible={deleteFromVisible} />
                            </div>
                        }
                    </RightTopContainer>

                    {isEditing ?
                        <input
                            ref={inputRef}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => setDescriptionInput(e.target.value)}
                            value={descriptionInput}
                            type="text"
                            disabled={isConfirmingEdit}
                            data-test="edit-input"
                        />

                        :

                        <ReactTagify colors={"white"} tagClicked={(tag) => navigate(`/hashtag/${tag.slice(1)}`)}>

                            <PostText data-test="description">{post_description ? post_description : ""}</PostText>

                        </ReactTagify>
                    }

                    <LinkContainer href={post_link} data-test="link" target="_blank">
                        <div>
                            <h2>{(post_link_title) && post_link_title > 45 ? `${post_link_title.substring(0, 45)}...` : `${post_link_title}`}</h2>

                            <p>{post_link_description}</p>

                            <p>{(post_link) && post_link.length > 45 ? `${post_link.substring(0, 45)}...` : `${post_link}`}</p>
                        </div>

                        <img src={post_link_image} alt={post_link_title} />
                    </LinkContainer>
                </RightContainer>
            </Post>

            <CommentsBox post={post_id} showComments={showComments} setNumber={setNumberComments} />
        </ContainerGlobal>
    )
}