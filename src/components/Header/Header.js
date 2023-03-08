import { HeaderContainer, InputDiv, InputSearch, LogoutContainer, PerfilContainer, StyledH1, UserImg } from "./Styled";
import { useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

export default function Header(props) {
    const { withSearch } = props;
    const [showLogout, setShowLogout] = useState(false);
    const navigate = useNavigate();

    const closeMenu = () => showLogout && setShowLogout(false);
    
    const goToHome = () => {
        closeMenu();
        navigate('/');
    }

    const logout = () => {
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

            <PerfilContainer onClick={() => setShowLogout(!showLogout)}>
                {showLogout ? <IoIosArrowUp size="30px" color="#FFF"/>:<IoIosArrowDown size="30px" color="#FFF"/>}
                <UserImg alt="perfil-image" />
            </PerfilContainer>

            <LogoutContainer showLogout={showLogout}>
                <p onClick={logout}>Logout</p>
            </LogoutContainer>
        </HeaderContainer>
    )
}