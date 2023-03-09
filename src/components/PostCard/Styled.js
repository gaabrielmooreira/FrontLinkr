import styled from "styled-components";
import { BLACK } from "../../constants/COLORS.js";
import { BiEditAlt } from 'react-icons/bi'
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export const Post = styled.li`
    display: flex;
    width:611px;
    margin-bottom: 29px;
    min-height:276px;
    border-radius:16px;
    padding:20px;
    background-color: ${BLACK}
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
        margin-left: 19px;
    }
    p{
        width: 50px;
        text-align: center;
        margin-top: 7px;
        color: #FFFFFF;
        font-family: 'Lato', sans-serif;
        font-size: 11px;
        font-weight: 400;
    }
`

export const HeartTransparent = styled(FaRegHeart)`
    color: #FFFFFF;
    font-size: 30px;
    &:hover{
        cursor: pointer;
    }
`

export const Heart = styled(FaHeart)`
    color: #AC0000;
    font-size: 30px;
    &:hover{
        cursor: pointer;
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
    }
    p{
        font-size: 17px;
        color: #B7B7B7;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        width: 100%;
        height: 44px;
        margin-bottom: 8px;
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
    a {
        background-color: ${BLACK};
        display: block;
        border: 1px solid #4D4D4D;
        border-radius: 10px;
        width: 100%;
        height: 155px;
    }
`

export const RightTopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 480px;
`

export const EditIcon = styled(BiEditAlt)`
    font-size: 20px;
    color: #FFF;
    &:hover{
        cursor: pointer;
    }
`