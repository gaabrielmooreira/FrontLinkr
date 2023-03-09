import styled from "styled-components";
import { AiFillDelete } from 'react-icons/ai'

export const DeleteIcon = styled(AiFillDelete)`
    color: #FFF;
    font-size: 20px;
    margin-left: 10px;
    &:hover{
        cursor: pointer;
    }
`

export const ModalContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    right: 0;
    justify-content: center;
    align-self: center;
    background-color: rgba(255,255,255, 0.9);
`

export const ModalBox = styled.div`
    position: absolute;
    top: calc(50% - 130px);
    right: calc(50% - 300px);
    background-color: #333333;
    border-radius: 50px;
    width: 600px;
    height: 260px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h2{
        width: 338px;
        font-size: 30px;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        color: #FFF;
        margin-bottom: 40px;
        text-align: center;
    }
    div{
        display: flex;
        justify-content: space-evenly;
        width: 338px;
        button {
            width: 137px;
            height: 37px;
            border: none;
            border-radius: 5px;
            font-family: 'Lato', sans-serif;
            font-size: 18px;
            font-weight: 700;
            &:hover{
                cursor: pointer;
            }
        }
        button:nth-child(1){
            color: #1877F2;
            background-color: #FFF;
        }
        button:nth-child(2){
            color: #FFF;
            background-color: #1877F2;
        }
    }
`