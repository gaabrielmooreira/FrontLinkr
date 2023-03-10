import { HeaderContainer, InputDiv, InputSearch, LogoutContainer, PerfilContainer, StyledH1, UserImg } from "./Styled";
import { useContext, useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/auth";
import apiAuth from "../../services/apiAuth";

export default function Header(props) {
    const { withSearch } = props;
    const [showLogout, setShowLogout] = useState(false);
    const {userAuth} = useContext(AuthContext)
    const navigate = useNavigate();

    const closeMenu = () => showLogout && setShowLogout(false);
    
    const goToHome = () => {
        closeMenu();
        navigate('/');
    }

    const logout = () => {
        apiAuth.signOut(userAuth.token)
        localStorage.removeItem("user")
        navigate('/sign-in');
        closeMenu();
    }

    return (
        <HeaderContainer tabIndex="0" onBlur={closeMenu}>
            <StyledH1 onClick={goToHome}>linkr</StyledH1>

            {withSearch &&
                <InputDiv onClick={closeMenu}>
                    <InputSearch placeholder="Search for people" />
                    <button><AiOutlineSearch size="25px" color="#C6C6C6" /></button>
                </InputDiv>
            }

            <PerfilContainer onClick={() => setShowLogout(!showLogout)} data-test="menu">
                {showLogout ? <IoIosArrowUp size="30px" color="#FFF"/>:<IoIosArrowDown size="30px" color="#FFF"/>}
                <UserImg src={userAuth.url} alt="perfil-image" data-test="avatar"/>
            </PerfilContainer>

            <LogoutContainer showLogout={showLogout} >
                <p onClick={logout} data-test="logout">Logout</p>
            </LogoutContainer>
        </HeaderContainer>
    )
}