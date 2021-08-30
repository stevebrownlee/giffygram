import { LoginForm } from "./auth/Login.js"
import { fetchMessages } from "./data/messageProvider.js"
import { fetchLikes, fetchPosts } from "./data/postProvider.js"
import { getMessageDisplay } from "./data/provider.js"
import { fetchUsers, getUsers, setCurrentUser } from "./data/userProvider.js"
import { GiffyGram } from "./GiffyGram.js"
import { PrivateMessageList } from "./message/PrivateMessages.js"

const applicationElement = document.querySelector(".giffygram")

applicationElement.addEventListener("stateChanged", () => renderApp())

const synchronizeState = () => {
    return fetchUsers()
        .then( () => fetchMessages() )
        .then( () => fetchPosts() )
        .then( () => fetchLikes() )
}

export const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))

    if (user) {
        console.log("User authenticated")


        synchronizeState().then(
            () => {
                const userobject = getUsers().find(u => u.id === parseInt(user))
                setCurrentUser(userobject)

                const displayMessages = getMessageDisplay()

                if (displayMessages) {
                    applicationElement.innerHTML = PrivateMessageList()
                    markAllMessagesRead()
                }
                else {
                    applicationElement.innerHTML = GiffyGram()
                }
            }
        )
    } else {
        console.log("User not authenticated")
        fetchUsers().then(
            () => {
                applicationElement.innerHTML = LoginForm()
            }
        )
    }
}

renderApp()
