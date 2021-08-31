import { getMessages, markAllMessagesRead } from "../data/messageProvider.js"
import { getUsers } from "../data/userProvider.js"

export const MessageList = () => {
    const messages = getMessages()
    const users = getUsers()

    const html = `<div class="messageList">
        ${messages.map(m => {
            const sender = users.find(user => m.userId === user.id)
            return `<div class="message" id="message--${m.id}">
                        <div class="message__author">From ${sender.name}</div>
                        <div class="message__text">${m.text}</div>
                    </div>`
            }).join("")
        }
    </div>`

    markAllMessagesRead()

    return html
}
