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
    const [query,setQuery] = useState("")
    const [usersQueryResult, setUsersQueryResult] = useState([])

    const closeMenu = () => showLogout && setShowLogout(false);

    const goToHome = () => {
        closeMenu();
        navigate('/timeline');
    }

    const logout = () => {
        apiAuth.signOut(userAuth.token)
        localStorage.removeItem("user")
        navigate('/');
        closeMenu();
    }

    async function handleUserSearch(string) {
        if (!string) setUsersQueryResult([])
        setQuery(string)
        try {
            const users = await apiUsers.getUsers(string, userAuth.token)
            setUsersQueryResult(users)

        } catch (error) {
            console.log(error)
        }
    }
    function handleClick(id){
        setQuery("")
        setUsersQueryResult([])
        navigate(`/user/${id}`)
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
                        onChange={(e) => handleUserSearch(e.target.value)} 
                        data-test="search"
                        value={query}
                    />
                    <ul items={usersQueryResult.length}>
                        {usersQueryResult.map((el)=>
                        <li key={el.id} onClick={()=>handleClick(el.id)} data-test="user-search">
                            <img src={el.photo_user} alt={el.name}/>
                            <p>{el.name}</p>
                        </li>)}
                    </ul>
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