import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { BLACK, WHITE } from "../../constants/COLORS"
import apiTrending from "../../services/apiTrending"

export default function TrendingCard() {
    const [hashtags, setHashtags] = useState(undefined)

    useEffect(() => {
        try {
            const dados = apiTrending.getTrendings('eb8cabb1-5a8e-4794-99e9-277278bf1634')
            dados.then(res => setHashtags(res))
        } catch (error) {
            console.log(error.message)
        }
    }, [])
    return (
        <Conteiner>
            <div>
                <h1>trending</h1>
            </div>
            {!hashtags ?
                <ul>carregando ...</ul> :
                <ul>
                    {hashtags.map((el, i) =>
                        <HashtagItem key={i}>
                            <Link to={`/trending/hashtag/${el.name}`}> {el.name}</Link>
                        </HashtagItem>)}
                </ul>
            }
        </Conteiner>
    )
}

const Conteiner = styled.div`
    max-height:406px;
    min-width: 301px;
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

`

const HashtagItem = styled.li`
    font-family: 'Lato';
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: 0.05em;
    margin: 5px 0;
    ::before {
        content:"#"
    }
    a { 
        color:${WHITE};
        text-decoration:none;
        &:focus, &:hover, &:visited, &:link, &:active {
            text-decoration: none
        }
    }
`