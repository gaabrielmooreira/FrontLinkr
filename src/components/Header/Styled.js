import styled from "styled-components";


export const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 72px;
    display: flex;
    overflow:visible;
    justify-content: space-between;
    align-items: center;
    background-color: #151515;
    padding: 10px 17px 8px 28px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 10;
`
export const StyledH1 = styled.h1`
    font-family: 'Passion One', cursive;
    font-size: 49px;
    font-weight: 700;
    color: #FFFFFF;
    &:hover{
        cursor: pointer;
    }
`
export const InputDiv = styled.div`
    display: none;
    @media screen and (min-width: 768px) {
        display: flex;
        position: relative;
        justify-content: space-between;
        width: 35%;
        height: 45px;
        button {
            position: absolute;
            right: 11px;
            top: 7px;
            width: 34px;
            height: 34px;
            border: none;
            background-color: #FFFFFF;
            &:hover{
                cursor: pointer;
            }
        }
        input {
            z-index:2;
            width: 100%;
            height: 48px;
            background-color: #FFFFFF;
            border: none;
            border-radius: 8px;
            padding: 10px 11px 12px 17px;
            font-size: 19px;
            font-family: 'Lato', sans-serif;
            font-weight: 400;
            &::placeholder{
                color: #C6C6C6;
            }
            &:focus {
                outline: none;
            }
        }

        ul {
            position:absolute;
            z-index:1;
            top:0px;
            display:flex;
            flex-direction:column;
            border-radius:8px;
            width: 100%;
            height: max-content;
            background-color: #E7E7E7;
            padding-top:48px;
            li {
                display:flex;
                gap:15px;
                align-items:center;
                padding:10px;
                width:100%;
                min-height: 50px;
                font-family: 'Lato';
                font-weight: 400;
                font-size: 19px;
                line-height: 23px;
                color: #515151;
                &:hover{
                    cursor:pointer;
                }
            }
            img {
                    width:39px;
                    height:39px;
                    border-radius:50%;
                }

        }
    }
`

// export const InputSearch = styled.input`
//     width: 100%;
//     height: 100%;
//     background-color: #FFFFFF;
//     border: none;
//     border-radius: 8px;
//     padding: 10px 11px 12px 17px;
//     font-size: 19px;
//     font-family: 'Lato', sans-serif;
//     font-weight: 400;
//     &::placeholder{
//         color: #C6C6C6;
//     }
//     &:focus {
//         outline: none;
//     }
// `
export const PerfilContainer = styled.div`
    display: flex;
    align-items: center;
    &:hover{
        cursor: pointer;
    }
`
export const UserImg = styled.img`
    width: 53px;
    height: 53px;
    border-radius: 50%;
    background-color: #FFF;
    background-size: cover;
    margin-left: 16px;
`
export const LogoutContainer = styled.div`
    position: fixed;
    right: 0;
    top: 72px;
    width: 133px;
    height: 47px;
    display: ${props => props.showLogout ? "flex" : "none"};
    padding: 9px 39px 18px 37px;
    border-radius: 0px 0px 0px 20px;
    background-color: #151515;
    p{
        cursor: pointer;
        color: #FFFFFF;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        font-size: 17px;
        border: none;
        background-color: #151515;
    }
`

export const userCardSearch = styled.ul`

`