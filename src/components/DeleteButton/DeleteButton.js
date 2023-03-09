import { useContext, useState } from "react"
import { DeleteIcon, ModalBox, ModalContainer } from "./Styled";
import { ColorRing } from 'react-loader-spinner'
import apiPosts from "../../services/apiPosts";
import { AuthContext } from "../../context/auth";


export default function DeleteButton({ idPost, postsAreChanged, setPostsAreChanged }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [deleteIsLoading, setDeleteIsLoading] = useState(false);
    const { userAuth } = useContext(AuthContext);

    const handleOpenModal = () => setModalIsOpen(true);
    const handleCloseModal = () => setModalIsOpen(false);
    const handleDeletePost = async () => {
        setDeleteIsLoading(true);

        try {
            await apiPosts.deletePost(idPost, userAuth.token)
            setDeleteIsLoading(false);
            setModalIsOpen(false);
            setPostsAreChanged(!postsAreChanged);
        } catch (error) {
            setDeleteIsLoading(false);
            setModalIsOpen(false);
            console.log(error);
            alert("Delete Failed.");
        }
    }

    return (
        <>
            <DeleteIcon onClick={handleOpenModal} color="#FFF" />
            {modalIsOpen &&
                <ModalContainer>
                    <ModalBox>
                        <h2>Are you sure you want to delete this post?</h2>
                        {deleteIsLoading ?
                            <ColorRing
                                visible={true}
                                height="80"
                                width="80"
                                ariaLabel="blocks-loading"
                                wrapperStyle={{}}
                                wrapperClass="blocks-wrapper"
                                colors={['#1877F2', '#1877F2', '#1877F2', '#1877F2', '#1877F2']}
                            />
                            :
                            <div>
                                <button onClick={handleCloseModal}>No, go back</button>
                                <button onClick={handleDeletePost}>Yes, delete it</button>
                            </div>
                        }
                    </ModalBox>
                </ModalContainer>
            }
        </>
    )
}