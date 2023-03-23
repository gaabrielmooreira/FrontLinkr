import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth";
import apiPosts from "../../services/apiPosts";
import { Box, Icon,ModalContainer, ModalBox} from "./Styled";
import { ColorRing } from 'react-loader-spinner'

export default function RepeatIcon({idPost, postsAreChanged, setPostsAreChanged}) {
    const [rePostcount, setRePostCount] = useState(0)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [insertIsLoading, setInsertIsLoading] = useState(false);
    const { userAuth } = useContext(AuthContext);

    const handleOpenModal = () => setModalIsOpen(true);
    const handleCloseModal = () => setModalIsOpen(false);
    const createRePost = async () => {
        setInsertIsLoading(true)

        try {
            await apiPosts.insertRePost(idPost, userAuth.token)
            setInsertIsLoading(false);
            setModalIsOpen(false);
            setPostsAreChanged(!postsAreChanged)
        } catch (error) {
            setInsertIsLoading(false);
            setModalIsOpen(false);
            console.log(error);
            alert("Create re-post Failed.");
        }

    }

    useEffect(()=>{
        try {
            const count = apiPosts.getRePostCount(idPost)
            count.then((res)=> {
                setRePostCount(res.data)
            })
            
        } catch (error) {
            console.log(error.message)
        }
    },[createRePost])


  return (
    <>
    <Box>
      <Icon onClick={handleOpenModal}/>
      <p>{`${rePostcount} re-post`}</p>
    </Box>
    {modalIsOpen &&
                <ModalContainer>
                    <ModalBox>
                        <h2>Do you want to re-post this link?</h2>
                        {insertIsLoading ?
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
                                <button onClick={handleCloseModal} data-test="cancel">No, cancel</button>
                                <button onClick={createRePost} data-test="confirm">Yes, share!</button>
                            </div>
                        }
                    </ModalBox>
                </ModalContainer>
            }
    </>
  );
}


