import { Settings } from "./settings.js"
import { getCurrentUser } from "./userProvider.js"

const applicationState = {
    messages: []
}

export const markAllMessagesRead = () => {
    const fetches = []

    getMessages().forEach(
        message => {
            fetches.push(
                fetch(`${Settings.apiURL}/messages/${message.id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        userId: message.userId,
                        recipientId: message.recipientId,
                        text: message.text,
                        read: true
                    })
                })
            )
        }
    )

    return Promise.all(fetches)
        .then(() => fetchMessages())
}

export const fetchMessages = () => {
    return fetch(`${Settings.apiURL}/messages`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.messages = data
            }
        )
}

export const getMessages = () => {
    const user = getCurrentUser()

    const userMessages = applicationState.messages.filter(
        (message) => {
            return message.recipientId === user.id
                    && !message.read
        }
    )
    return userMessages
}

export const saveMessage = (message) => {
    return fetch(`${Settings.apiURL}/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
        .then(response => response.json())
        .then(() => {
            return fetchMessages()
        })
}