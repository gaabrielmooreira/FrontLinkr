import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/auth";
import DeleteButton from "../DeleteButton/DeleteButton";
import { EditIcon, Heart, HeartTransparent, LeftContainer, Post, RightContainer, RightTopContainer } from "./Styled"

export default function PostCard({ post, postsAreChanged, setPostsAreChanged }) {
    const { id, post_author_id, post_author, photo_author, post_description, post_link, liked_by, user_liked, likes_count } = post;
    const { userAuth } = useContext(AuthContext);


    const [description, setDescription] = useState('Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material');
    const [isEditing, setIsEditing] = useState(false);
    const [descriptionInput, setDescriptionInput] = useState(description);
    const inputRef = useRef(null);

    const [isLike, setIsLike] = useState(user_liked);


    const handleKeyDown = async (event) => {
        if (event.key === 'Enter') {
            // Requisição Put para o Back-End atualizar o texto
            // Se a requisição der certo setDescription(descriptionInput) e setIsEditing(false);
            // Se nao der certo cancelEdit()
        }
        if (event.key === 'Escape') cancelEdit();
    }

    useEffect(() => {
        if (isEditing) inputRef.current.focus()
    }, [isEditing]);

    const openEdit = () => {
        setIsEditing(true);
    }

    const cancelEdit = () => {
        setDescriptionInput(description);
        setIsEditing(false);
    }

    return (
        <Post>
            <LeftContainer>
                <img src={photo_author} alt="foto-perfil"/>
                {isLike ? <Heart />:<HeartTransparent />}
                <p>{likes_count > 0 ? `${likes_count} likes`:""}</p>
            </LeftContainer>
            <RightContainer>
                <RightTopContainer>
                    <h2>Juvenal Juvêncio</h2>
                    <div>
                            <EditIcon onClick={() => isEditing ? cancelEdit() : openEdit()} color='#FFF' size='20px' />
                            <DeleteButton idPost={id} postsAreChanged={postsAreChanged} setPostsAreChanged={setPostsAreChanged}/>
                    </div>
                </RightTopContainer>
                {isEditing ?
                    <input ref={inputRef} onKeyDown={handleKeyDown} onChange={(e) => setDescriptionInput(e.target.value)} value={descriptionInput} type="text" />
                    :
                    <p>{description}</p>
                }
                <a>{post_link}</a>
            </RightContainer>
        </Post>
    )
}