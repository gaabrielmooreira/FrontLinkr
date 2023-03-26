import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { BLACK, WHITE } from "../../constants/COLORS"
import { AuthContext } from "../../context/auth"
import apiTrending from "../../services/apiTrending"

export default function TrendingCard({postsAreChanged}) {
    const [hashtags, setHashtags] = useState(undefined)
    const { userAuth } = useContext(AuthContext)

    useEffect(() => {
        try {
            const dados = apiTrending.getTrendings(userAuth.token) // trocar depois o token pra ser do context ou localstorage
            dados.then(res => setHashtags(res))
        } catch (error) {
            console.log(error.message)
        }
    }, [userAuth.token,postsAreChanged])
    return (
        <Container data-test="trending">
            <div>
                <h1>trending</h1>
            </div>
            {!hashtags || hashtags.length === 0 ?
                <ul>
                    {hashtags ? <li>Nothing trending today yet</li> : <li>Carregando ...</li> }
                </ul> :
                <ul>
                    {hashtags.map((el, i) =>
                        <HashtagItem key={i}>
                            <Link data-test="hashtag" to={`/hashtag/${el.name}`}>#{el.name}</Link>
                        </HashtagItem>)}
                </ul>
            }
        </Container>
    )
}

const Container = styled.div`
    max-height:406px;
    min-width: 30%;
    div:nth-child(1) {
        background-color:${BLACK};
        border-radius: 16px 16px 0 0;
        padding:10px 16px;
    }
    ul:nth-child(2) {
        background-color:${BLACK};
        border-radius: 0 0 16px 16px;
        padding:10px 16px;
        margin-top:1px;
    }
    h1 {
        font-size: 27px;
        line-height: 40px;  
    }
    @media (max-width: 768px) {
    display:none;
 }

`

const HashtagItem = styled.li`
    font-family: 'Lato';
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: 0.05em;
    margin: 5px 0;
    a { 
        color:${WHITE};
        text-decoration:none;
        &:focus, &:hover, &:visited, &:link, &:active {
            text-decoration: none
        }
    }
`