import styled from "styled-components";
import { RiRepeatLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import apiPosts from "../../services/apiPosts";

export default function RepeatIcon({idPost}) {
    const [rePostcount, setRePostCount] = useState(0)

    useEffect(()=>{
        try {
            const count = apiPosts.getRePostCount(idPost)
            count.then((res)=> {
                setRePostCount(res.data)
            })
            
        } catch (error) {
            console.log(error.message)
        }
    },[])


  return (
    <Box>
      <Icon />
      <p>{`${rePostcount} re-post`}</p>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    font-family: "Lato";
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    text-align: center;
    color: #ffffff;
    margin-top: 5px;
  }
`;

const Icon = styled(RiRepeatLine)`
  color: #ffffff;
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;
