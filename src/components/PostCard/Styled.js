import styled from "styled-components";
import { BLACK } from "../../constants/COLORS.js";
import { BiEditAlt } from 'react-icons/bi'
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export const ContainerGlobal = styled.div`
 margin-bottom: 29px;
 @media (max-width: 768px) {
    width:100%
 }
 `

export const Post = styled.li`
    display: flex;
    width:611px;
    margin-bottom: 29px;
    min-height:276px;
    border-radius:16px;
    padding:20px;
    background-color: ${BLACK};
    position: relative;
    z-index: 0;
    @media (max-width: 768px) {
    width:100%
 }
`

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;
    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-bottom: 19px;
        &:hover{
            cursor: pointer;
        }
    }
    @media (max-width: 768px) {
        width:20%;
    }
   
`

export const ReactionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    p{
        width: 50px;
        text-align: center;
        margin-top: 5px;
        margin-bottom: 20px;
        color: #FFFFFF;
        font-family: 'Lato', sans-serif;
        font-size: 11px;
        font-weight: 400;
    }

`

export const HeartTransparent = styled(FaRegHeart)`
    color: #FFFFFF;
    font-size: 20px;
    &:hover{
        cursor: pointer;
    }
`

export const Heart = styled(FaHeart)`
    color: #AC0000;
    font-size: 20px;
    &:hover{
        cursor: pointer;
    }
`

export const TooltipContainer = styled.a`
    text-decoration: none;
    width: 50px;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 20px;
    color: #FFFFFF;
    font-family: 'Lato', sans-serif;
    font-size: 11px;
    font-weight: 400;
    p {
        margin-bottom: 0px;
    }
`

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    h2{
        text-transform: capitalize;
        color: #fff;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 19px;
        margin-bottom: 7px;
        &:hover{
            cursor: pointer;
        }
    }
    input {
        width: 100%;
        height: 44px;
        border-radius: 7px;
        margin-bottom: 8px;
        &:focus{
            outline: none;
        }
    }
    @media (max-width: 768px) {
        width:80%;
    }
`

export const PostText = styled.p`
    font-size: 17px;
    color: #B7B7B7;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    width: 100%;
    height: 44px;
    margin-bottom: 8px;
`

export const LinkContainer = styled.a`
    background-color: ${BLACK};
    display: flex;
    border: 1px solid #4D4D4D;
    border-radius: 13px;
    width: 480px;
    height: 155px;
    justify-content: space-between;
    div{
        padding: 25px 27px 23px 20px;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
    }
    h2{
        color: #CECECE;
        font-size: 16px;
        height: 32px;
    }
    p:nth-child(2){
        color: #9B9595;
        font-size: 11px;
        height: 44px;
        margin-bottom: 20px;
    }
    p:nth-child(3){
        text-decoration: none;
        color: #CECECE;
        font-size: 11px;
    }
    img{
        width: 154px;
        height: 154px;
        border-radius: 0px 13px 13px 0px;
    }
    @media (max-width:768px) {
    width:100%;
  }
`

export const RightTopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 480px;
    @media (max-width:768px) {
    width:100%;
  }
`

export const EditIcon = styled(BiEditAlt)`
    font-size: 20px;
    color: #FFF;
    &:hover{
        cursor: pointer;
    }
`