import { saveMessage } from "../data/messageProvider.js"
import { getCurrentUser, getUsers } from "../data/userProvider.js"

let miniMode = true
const applicationElement = document.querySelector(".giffygram")

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "directMessageIcon") {
        miniMode = !miniMode
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "directMessage__close") {
        miniMode = true
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "directMessage__cancel") {
        const recipient = document.querySelector("select[name='directMessage__userSelect']")
        const message = document.querySelector("input[name='message']")

        recipient.value = 0
        message.value = ""
    }
})

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "directMessage__submit") {
        const recipient = document.querySelector("select[name='directMessage__userSelect']")
        const message = document.querySelector("input[name='message']")
        const [, recipientId] = recipient.value.split("--")

        const messageObject = {
            userId: getCurrentUser().id,
            recipientId: parseInt(recipientId),
            text: message.value,
            read: false
        }

        saveMessage(messageObject).then(() => {
            recipient.value = 0
            message.value = ""
        })
    }
})

export const MessageForm = () => {
    const users = getUsers()

    if (miniMode) {
        return ``
    }
    else {
        return `
            <div class="directMessage">
                <h3>Direct Message</h3>
                <div>Recipient:
                    <select name="directMessage__userSelect" class="message__input">
                        <option value="0">Choose a recipient...</option>
                        ${
                            users.map(u => `<option value="messageRecipient--${u.id}">${u.name}</option>`)
                        }
                    </select>
                </div>
                <div>
                    <label for="message">Message:</label>
                    <input name="message"
                        class="message__input"
                        type="text"
                        placeholder="Message to user" />
                </div>

                <button id="directMessage__submit">Save</button>
                <button id="directMessage__cancel">Clear</button>

                <button id="directMessage__close">x</button>

            </div>
        `
    }
}
