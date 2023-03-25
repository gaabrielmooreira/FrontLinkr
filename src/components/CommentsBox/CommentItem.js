import styled from "styled-components";

export default function CommentItem({ item }) {

    let relation = "";
    if(item.is_following == true) {
        relation = "• following";
    }
    
    if(item.is_author == true)  {
        relation ="• post's author";
    }

    
    return (
        <CommentContainer data-test="comment">
            <Picture src={item.photo} />
            <div>
                <div>
                    <p>{item.name} <span>{relation}</span></p> 
                </div>

                <h1>{item.comment_text}</h1>
            </div>
        </CommentContainer>
    )
}

const Picture = styled.img`
width: 38px;
border-radius: 100%;
margin-right: 17px;
`
const CommentContainer = styled.div`
width: 571px;
margin-left: 20px;
display: flex;
align-items: center;
height: 71px;
color:#ACACAC;
font-size: 14px;

border-bottom-width: 1px;
border-bottom-color:#353535;
border-style: solid;
div{
    display: flex;
    flex-direction: column;
}
span{
    color: #565656;
    font-weight: 400;

}
p{
    font-weight: 700;
    color: #F3F3F3;
    margin-bottom: 9px;
}
h1{
    font-weight:400;
    
}
`
