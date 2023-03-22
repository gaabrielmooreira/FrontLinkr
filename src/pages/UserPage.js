import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PostsMainSection from "../components/PostsMainSection/PostsMainSection"
import { AuthContext } from "../context/auth"
import apiFollow from "../services/apiFollow"
import apiPosts from "../services/apiPosts"


export default function UserPage() {
    const { idUser } = useParams()
    const [posts, setPosts] = useState(undefined)
    const { userAuth } = useContext(AuthContext)
    const [author, setAuthor] = useState(undefined)
    const [isFollowed, setIsFollowed] = useState(false)

    useEffect(() => {
        try {
            const promise = apiFollow.isFollowed(userAuth.token, Number(idUser))
            promise.then(res => setIsFollowed(res))
        } catch (error) {
            console.log(error.message)
        }
        try {
            const data = apiPosts.getPostsByUser(idUser, userAuth.token)
            data.then((res) => {
                setPosts(res)
                setAuthor(res[0].post_author)
            })
        } catch (error) {
            console.log(error.message)
        }
    }, [idUser, userAuth.token])

    function toggleFollow() {
        if (isFollowed === "waiting") return
        if (!isFollowed) {
            setIsFollowed("waiting")
            try {
                const promise = apiFollow.follow(userAuth.token, Number(idUser))
                promise.then(() => setIsFollowed(true))
                    .catch(() => {
                        alert(`Something went wrong. Coudn't follow ${author}`)
                        setIsFollowed(false)
                    })
            } catch (error) {
                console.log(error.message)
            }
        } else {
            setIsFollowed("waiting")
            try {
                const promise = apiFollow.unfollow(userAuth.token, Number(idUser))
                promise.then(() => setIsFollowed(false))
                .catch(() => {
                    alert(`Something went wrong. Coudn't unfollow ${author}`)
                    setIsFollowed(true)
                })
            } catch (error) {
                console.log(error.message)
            }
        }
    }

    return (
        <PostsMainSection toggleFollow={Number(idUser) !== userAuth.id && toggleFollow} isFollowed={isFollowed} title={author} posts={!posts ? 'carregando' : posts} />
    )
}