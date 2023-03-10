import { HeaderContainer, InputDiv, LogoutContainer, PerfilContainer, StyledH1, UserImg } from "./Styled";
import { useContext, useState } from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/auth";
import apiAuth from "../../services/apiAuth";
import { DebounceInput } from 'react-debounce-input';
import apiUsers from "../../services/apiUsers";


export default function Header(props) {
    const { withSearch } = props;
    const [showLogout, setShowLogout] = useState(false);
    const { userAuth } = useContext(AuthContext)
    const navigate = useNavigate();
    const [usersQueryResult, setUsersQueryResult] = useState([])

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

    async function handleUserSearch(string) {
        if (!string) setUsersQueryResult([])
        try {
            const users = await apiUsers.getUsers(string, userAuth.token)
            setUsersQueryResult(users)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <HeaderContainer tabIndex="0" onBlur={closeMenu}>
            <StyledH1 onClick={goToHome}>linkr</StyledH1>

            {withSearch &&
                <InputDiv onClick={closeMenu}>
                    <DebounceInput
                        placeholder="Search for people"
                        minLength={3}
                        debounceTimeout={300}
                        list="users"
                        onChange={(e) => handleUserSearch(e.target.value)} />
                    <ul items={usersQueryResult.length}>
                        {usersQueryResult.map((el)=>
                        <li key={el.id} onClick={()=>navigate(`/user/${el.id}`)}>
                            <img src={el.photo_user} alt={el.name}/>
                            <p>{el.name}</p>
                        </li>)}
                    </ul>



                    {/* <datalist id="users">
                        {usersQueryResult.map((el) => 
                        <option key={el.id} value={el.name} onClick={()=>navigate(`/users/${el.id}`)}>
                            <img src={el.url}></img>
                        </option>)}
                    </datalist> */}
                    <button><AiOutlineSearch size="25px" color="#C6C6C6" /></button>
                </InputDiv>
            }

            <PerfilContainer onClick={() => setShowLogout(!showLogout)}>
                {showLogout ? <IoIosArrowUp size="30px" color="#FFF" /> : <IoIosArrowDown size="30px" color="#FFF" />}
                <UserImg src={userAuth.url} alt="perfil-image" />
            </PerfilContainer>

            <LogoutContainer showLogout={showLogout}>
                <p onClick={logout}>Logout</p>
            </LogoutContainer>
        </HeaderContainer>
    )
}