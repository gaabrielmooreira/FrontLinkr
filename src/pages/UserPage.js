import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PostsMainSection from "../components/PostsMainSection/PostsMainSection"
import { AuthContext } from "../context/auth"
import apiFollow from "../services/apiFollow"
import apiPosts from "../services/apiPosts"
import apiUsers from "../services/apiUsers"


export default function UserPage() {
    const { idUser } = useParams()
    const [posts, setPosts] = useState(undefined)
    const { userAuth } = useContext(AuthContext)
    const [user, setUser] = useState({name:"",photo_user:""})
    const [isFollowed, setIsFollowed] = useState(false)

    useEffect(() => {
        try {
            const promise = apiUsers.getUserByID(Number(idUser), userAuth.token)
            promise.then(({ name, photo_user, is_following }) => {
                setIsFollowed(is_following)
                setUser({ name, photo_user })
            })
        } catch (error) {
            console.log(error.message)
        }
        try {
            const data = apiPosts.getPostsByUser(idUser, userAuth.token)
            data.then((res) => {
                setPosts(res)
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
                        alert(`Something went wrong. Coudn't follow ${user.name}`)
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
                        alert(`Something went wrong. Coudn't unfollow ${user.name}`)
                        setIsFollowed(true)
                    })
            } catch (error) {
                console.log(error.message)
            }
        }
    }

    return (
        <PostsMainSection
            toggleFollow={Number(idUser) !== userAuth.id && toggleFollow}
            isFollowed={isFollowed}
            title={`${user.name}’s posts`}
            user_photo={user.photo_user}
            posts={!posts ? 'carregando' : posts}
        />
    )
}