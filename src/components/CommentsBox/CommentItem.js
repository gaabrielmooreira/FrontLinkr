import styled from "styled-components"
export default function CommentItem({ item }) {
    return (
        <CommentContainer>
            <Picture src={item.foto} />
            <div>
                <div>
                    <p>{item.nome} <span>{item.relation !== "" ? item.relation : ""}</span></p>
                    
                </div>

                <h1>{item.comment}</h1>
            </div>
        </CommentContainer>
    )
}

const Picture = styled.img`
width: 39px;
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
    margin-bottom: 8px;
}
h1{
    font-weight:400;
    
}
`
