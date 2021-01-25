import { getUsers, savenewMessages } from "../store/index.js"

let miniMode = true
const applicationElement = document.querySelector(".giffygram")

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "miniMode") {
        miniMode = false
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})


document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "newMessages__cancel") {
        miniMode = true
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "newMessages__submit") {
        const title = document.querySelector("input[name='postTitle']").value
        const url = document.querySelector("input[name='postURL']").value
        const description = document.querySelector("textarea[name='postDescription']").value

        const postObect = {
            title: title,
            imageURL: url,
            description: description,
            userId: parseInt(localStorage.getItem("gg_user")),
            timestamp: Date.now()
        }

        savenewMessages(postObect)
        miniMode = true
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
        <div class="newMessages">
            <div>Recipient:
                <select id="newMessages__userSelect">
                    <option>Choose a recipient...</option>
                    ${
                        users.map(u => `<option id="messageRecipient--${u.id}">${u.id}</option>`)
                    }
                </select>
            </div>
            <div>
                <label for="directMessage">Message:</label>
                <input name="directMessage"
                       class="newMessages__message"
                       type="text"
                       placeholder="Message to user" />
            </div>

            <button id="newMessages__submit">Save</button>
            <button id="newMessages__cancel">Cancel</button>
        </div>
        `
    }
}
