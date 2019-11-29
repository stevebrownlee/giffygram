import { getPosts } from "./feed/PostProvider.js"
import useSimpleAuth from "./hooks/useSimpleAuth.js"
import LoginForm from "./auth/Login.js"
import PostList from "./feed/PostList.js"
import NavBar from "./nav/NavBar.js"

if (useSimpleAuth().isAuthenticated()) {
    getPosts()
        .then(NavBar)
        .then(PostList)
} else {
    LoginForm()
}

const eventHub = document.querySelector(".giffygram")

eventHub.addEventListener("login", e => {
    getPosts().then(() => PostList())
})

eventHub.addEventListener("unauthorizedRequest", e => {
    LoginForm()
})
