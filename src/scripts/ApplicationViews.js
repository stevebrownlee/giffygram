import { getPosts } from "./feed/PostProvider.js"
import NavBar from "./nav/NavBar.js"
import PostList from "./feed/PostList.js"
import LoginForm from "./auth/Login.js"
import DirectMessage from "./friends/DirectMessage.js"
import { getFriends } from "./friends/FriendProvider.js"

export const initializeViews = () => {
    /**
     * Event listener section
     */
    const eventHub = document.querySelector(".giffygram")

    // What should happen immediately after a user authenticates?
    eventHub.addEventListener("login", giffyGram)

    // What should happen when user clicks on direct message icon?
    eventHub.addEventListener("directMessage", showDirectMessage)

    /**
     * What should happen when an expired, or missing token, causes
     * an unauthorized request to the API?
     */
    eventHub.addEventListener("unauthorizedRequest", LoginForm)

    giffyGram()
}

const giffyGram = () => {
    getPosts()
        .then(NavBar)
        .then(PostList)
}

const showDirectMessage = () => {
    console.log("Initiate direct message")
    getFriends().then(DirectMessage)
}

const showUserProfile = () => {

}

const showNewPost = () => {

}