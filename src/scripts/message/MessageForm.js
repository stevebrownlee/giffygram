import { getUsers, saveMessage } from "../store/index.js"

let miniMode = true
const applicationElement = document.querySelector(".giffygram")

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "directMessageIcon") {
        miniMode = !miniMode
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "directMessage__submit") {
        const recipient = document.querySelector("select[name='directMessage__userSelect']").value
        const message = document.querySelector("input[name='message']").value
        const [prefix, recipientId] = recipient.split("--")

        const messageObject = {
            userId: parseInt(localStorage.getItem("gg_user")),
            recipientId: parseInt(recipientId),
            message: message
        }

        saveMessage(messageObject)
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
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
                    <option>Choose a recipient...</option>
                    ${
                        users.map(u => `<option value="messageRecipient--${u.id}">${u.id}</option>`)
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
            <button id="directMessage__cancel">Cancel</button>
        </div>
        `
    }
}
