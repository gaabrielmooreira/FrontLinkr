import styled from 'styled-components'
import { AiOutlineComment } from 'react-icons/ai';


export default function CommentIcon({number, showComments, setShowComments}) {
    
    function toggleDisplay(){
        if(showComments === false) setShowComments(true)
        else setShowComments(false)
    }
    return (
        <IconDiv>
            <Icon onClick={toggleDisplay} data-test="comment-btn" />
            <p data-test="comment-counter">{`${number} comments`}</p>
        </IconDiv>

    )
}
const IconDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
p{
  font-size: 10px;
}
`

const Icon = styled(AiOutlineComment)`
  color: #ffffff;
  font-size: 27px;
 
  &:hover {
    cursor: pointer;
  }
`