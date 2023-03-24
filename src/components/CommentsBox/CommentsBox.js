import styled from "styled-components";
import { BsSend } from "react-icons/bs";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/auth";
import CommentItem from "./CommentItem";
import apiComments from "../../services/apiComments";


export default function CommentsBox({ post, showComments, setNumber, photo }) {
    const { userAuth } = useContext(AuthContext);

    const [inputText, setInputText] = useState("");
    const [allComments, setAllComments] = useState([]);
    const [reload, setReload] = useState(0);

    async function loadComments() {
        try {
            const commentsArray = await apiComments.getAllComments(post, userAuth.token);
            setAllComments([...commentsArray]);
            setNumber(commentsArray.length);

        } catch (error) {
            alert(error.message);
        }
    }
    useEffect(() => {
        loadComments();
    }, [reload]);

    setInterval(() =>{
        loadComments();
    }, 30000);

    async function sendComment() {
        if (!inputText.length) {
            return alert("Não é possível fazer comentários vazios");
        }
        try {
            const newId = await apiComments.insertComment(post, inputText, userAuth.token);
            setReload(newId.id);
            setInputText("");
        } catch (error) {
            alert(error.message);
        }

    }

    return (
        <Container showComments={showComments}>
            <ShowCommentsBox >
                {allComments.length !== 0 ? allComments.map((item) => <CommentItem  item={item} />) : ""}
            </ShowCommentsBox>
            <MakeComment>
                <img src={photo} />
                <input type="text" placeholder="write a comment..." value={inputText} onChange={(event) => setInputText(event.target.value)} />
                <SendIcon onClick={sendComment} />
            </MakeComment>
        </Container>
    )
}
const SendIcon = styled(BsSend)`
position: absolute;
right: 39px;
font-size: 14px;
&:hover {
    cursor: pointer;
  }
`
const MakeComment = styled.div`
display: flex;
align-items: center;
margin-left: 20px;
height: 71px;
position: relative;
input{
    border-radius: 8px;
    background-color: #252525;
    width: 510px;
    height: 39px;
    border: none;
    color: #575757;
    padding: 15px;
;
}
img{
width: 39px;
border-radius: 100%;
margin-right: 17px;
}
`
const ShowCommentsBox = styled.div`

flex-direction: column;
`
const Container = styled.div`
margin-top: -50px;
padding-top: 23px;
flex-direction: column;
background-color: #1E1E1E;
border-radius: 16px;
display: ${props => props.showComments ? "flex" : "none"};
`