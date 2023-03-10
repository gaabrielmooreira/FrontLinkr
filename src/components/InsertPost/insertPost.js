import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth";
import apiPosts from "../../services/apiPosts";
import {
  Button,
  Container,
  InputDescription,
  InputUrl,
  LeftContainer,
  RightContainer,
} from "./styled";

export default function InsertPost() {
  const { userAuth } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);
  const [postInfo, setPostInfo] = useState({
    url: "",
    description: "",
  });

  const { url, description } = postInfo;

  function onPublish(e) {
    e.preventDefault();

    if (url === "") {
      return alert("link is required!");
    }
    setDisabled(true);

    try {
      apiPosts.insertPost( description, url, userAuth.token);
      setPostInfo({ url: "", description: "" });
      setDisabled(false);
    } catch (error) {
      console.log(error.message);
      setDisabled(false);
      alert("There was an error publishing your link");
    }
  }

  return (
    <Container>
      <LeftContainer>
        <img src={userAuth.url} alt="perfil-image" />
      </LeftContainer>
      <RightContainer onSubmit={onPublish}>
        <h2>What are you going to share today?</h2>
        <InputUrl
          placeholder="htpp://..."
          type="url"
          value={url}
          onChange={(e) => setPostInfo({ ...postInfo, url: e.target.value })}
          disabled={disabled}
        />
        <InputDescription
          placeholder="Awesome article about..."
          type="text"
          value={description}
          onChange={(e) =>
            setPostInfo({ ...postInfo, description: e.target.value })
          }
          disabled={disabled}
        />
        <Button>
          <button type="submit" disabled={disabled}>
            Publish
          </button>
        </Button>
      </RightContainer>
    </Container>
  );
}
