import { useFriends } from "./FriendProvider.js"

const eventHub = document.querySelector(".giffygram")
const contentTarget = document.querySelector(".giffygram")

const DirectMessage = () => {
    const friends = useFriends()

    const render = (friendCollection) => {
        contentTarget.innerHTML += `
            <dialog id="directMessageDialog">
                <select>
                    <option value="0">Select a friend...</option>
                    ${
                        friends.map(f => `
                            <option value="${f.id}">${f.name}</option>
                        `)
                    }
                </select>
            </dialog>
        `

        document.querySelector("#directMessageDialog").showModal()
    }

    getFriends().then(DirectMessage)
    render()
}

export default DirectMessage
