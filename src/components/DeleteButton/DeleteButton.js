import axios from "axios";
import { useState } from "react"
import { DeleteIcon, ModalBox, ModalContainer } from "./Styled";
import { ColorRing } from 'react-loader-spinner'


export default function DeleteButton({ idPost, setPostsAreChanged }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [deleteIsLoading, setDeleteIsLoading] = useState(false);
    const token = 1;

    const handleOpenModal = () => setModalIsOpen(true);
    const handleCloseModal = () => setModalIsOpen(false);
    const handleDeletePost = async () => {
        setDeleteIsLoading(true);
        const URL = `${process.env.REACT_APP_API_BASE_URL}/posts/${idPost}`;
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        };

        try {
            await axios.delete(URL, config);
            setDeleteIsLoading(false);
            setModalIsOpen(false);
            setPostsAreChanged(true);
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