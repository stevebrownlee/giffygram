import { LoginForm } from "./auth/Login.js"
import { GiffyGram } from "./GiffyGram.js"
import { PrivateMessageList } from "./message/PrivateMessages.js"
import { fetchLikes, fetchMessages, fetchUsers, fetchPosts, getMessageDisplay, markAllMessagesRead } from "./data/provider.js"

const applicationElement = document.querySelector(".giffygram")

applicationElement.addEventListener("stateChanged", () => renderApp())

const synchronizeState = () => {
    return fetchUsers()
        .then(
            () => {
                return fetchMessages()
            }
        )
        .then(
            () => fetchPosts()
        )
        .then(() => fetchLikes())
}

export const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))

    if (user) {
        console.log("User authenticated")
        synchronizeState().then(
            () => {
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
