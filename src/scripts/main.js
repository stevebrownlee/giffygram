import { LoginForm } from "./auth/Login.js"
import { fetchMessages, markAllMessagesRead } from "./data/messageProvider.js"
import { fetchLikes, fetchPosts } from "./data/postProvider.js"
import { getMessageDisplay } from "./data/provider.js"
import { fetchUsers, getUsers, setCurrentUser } from "./data/userProvider.js"
import { GiffyGram } from "./GiffyGram.js"
import { PrivateMessageList } from "./message/PrivateMessages.js"

const applicationElement = document.querySelector(".giffygram")

export const renderApp = () => {
    if (determineAuth()) {
        synchronizeState().then(
            () => {
                const displayMessagesChosen = getMessageDisplay()

                if (displayMessagesChosen) {
                    applicationElement.innerHTML = PrivateMessageList()
                }
                else {
                    applicationElement.innerHTML = GiffyGram()
                }
            }
        )
    } else {
        fetchUsers().then(
            () => {
                applicationElement.innerHTML = LoginForm()
            }
        )
    }
}

const synchronizeState = () => {
    return fetchUsers()
    .then( () => fetchMessages() )
    .then( () => fetchPosts() )
    .then( () => fetchLikes() )
}

const determineAuth = () => {
    const user = localStorage.getItem("gg_user")

    if (user) {
        const unencodedUser = atob(user)
        const parsedUser = JSON.parse(unencodedUser)
        setCurrentUser(parsedUser)
        return true
    }

    return false
}

applicationElement.addEventListener("stateChanged", () => renderApp())


renderApp()