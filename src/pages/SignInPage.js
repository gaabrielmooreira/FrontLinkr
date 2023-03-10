import { useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/auth";

export default function SignInPage() {
  const { setUserAuth } = useContext(AuthContext);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginInfo;
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  function OnSubmit(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      return alert("Please fill in all fields.");
    }

    setDisabled(true);
    const body = { email, password };

    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/signin`, body)
      .then((res) => {
        const { token, url, name, id } = res.data;
        setUserAuth({ token, url, name, id });
        localStorage.setItem("user", JSON.stringify({ token, url, name, id }));

        navigate("/");
      })
      .catch((error) => {
        alert(error.response.data);
        setDisabled(false);
      });
  }

  return (
    <>
      <ScreenContainer>
        <LeftContainer>
          <Logo>linkr</Logo>
          <Slogan>save, share and discover the best links on the web</Slogan>
        </LeftContainer>
        <RigthContainer>
          <Form onSubmit={OnSubmit}>
            <input
              placeholder="e-mail"
              type="email"
              value={email}
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, email: e.target.value })
              }
              data-test="email"
            />
            <input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, password: e.target.value })
              }
              data-test="password"
            />
            <button type="submit" disabled={disabled} data-test="login-btn">
              Log In
            </button>

            <Link to={"/sign-up"} data-test="sign-up-link">
              <Login>First time? Create an account!</Login>
            </Link>
          </Form>
        </RigthContainer>
      </ScreenContainer>
    </>
  );
}

const ScreenContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 827px) {
    display: block;
  }
`;

const LeftContainer = styled.div`
  width: 65%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #151515;
  box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);
  padding-left: 10%;

  @media (max-width: 827px) {
    width: 100%;
    min-height: 175px;
    padding: 0;
    align-items: center;
  }
`;

const Logo = styled.div`
  font-family: "Passion One";
  font-style: normal;
  font-weight: 700;
  font-size: 106px;
  line-height: 117px;
  letter-spacing: 0.05em;
  color: #ffffff;

  @media (max-width: 827px) {
    font-size: 76px;
    line-height: 84px;
  }
`;

const Slogan = styled.div`
  width: 442px;
  height: 128px;
  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 64px;
  color: #ffffff;

  @media (max-width: 827px) {
    width: 237px;
    height: 68px;
    font-size: 23px;
    line-height: 34px;
  }
`;

const RigthContainer = styled.div`
  width: 35%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #333333;

  @media (max-width: 827px) {
    width: 100%;
    min-height: 80vh;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  @media (max-width: 827px) {
    justify-content: start;
    margin-top: 40px;
  }
  input {
    width: 80%;
    height: 65px;
    background: #ffffff;
    border-radius: 6px;
    font-family: "Oswald";
    font-style: normal;
    font-size: 27px;
    line-height: 40px;
    color: #9f9f9f;
    margin-top: 10px;

    @media (max-width: 827px) {
      font-size: 22px;
      line-height: 33px;
    }
  }
  button {
    width: 80%;
    height: 65px;
    background: #1877f2;
    border-radius: 6px;
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    color: #ffffff;
    margin-top: 10px;

    @media (max-width: 827px) {
      font-size: 22px;
      line-height: 33px;
    }
  }
  button:disabled {
    width: 80%;
    height: 65px;
    background: #52b6ff;
    opacity: 0.7;
    border-radius: 5px;
  }
`;

const Login = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-decoration-line: underline;
  color: #ffffff;
  margin-top: 15px;
`;
