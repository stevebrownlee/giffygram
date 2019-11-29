import { getPosts } from "./feed/PostProvider.js"
import NavBar from "./nav/NavBar.js"
import PostList from "./feed/PostList.js"

export const Giffygram = () => {
    getPosts()
        .then(NavBar)
        .then(PostList)
}

export const UserProfile = () => {

}

export const NewPost = () => {

}