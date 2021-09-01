import { NavBar } from "../nav/NavBar.js"
import { Footer } from "../nav/Footer.js"
import { MessageList } from "../message/MessageList.js"

export const PrivateMessageList = () => {
    return `
        ${NavBar()}
        <div class="messages">
            ${MessageList()}
        </div>
        ${Footer()}
    `
}
