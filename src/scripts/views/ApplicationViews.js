import LoginForm from "../auth/Login.js"
import DirectMessage from "../friends/DirectMessage.js"
import { getFriends } from "../friends/FriendProvider.js"
import GiffyGram from "../GiffyGram.js"

/**
 * Event listener section
 */
const eventHub = document.querySelector(".giffygram")

// What should happen immediately after a user authenticates?
eventHub.addEventListener("login", GiffyGram)

// What should happen when user clicks on direct message icon?
eventHub.addEventListener("directMessage", DirectMessage)

/**
 * What should happen when an expired, or missing token, causes
 * an unauthorized request to the API?
 */
eventHub.addEventListener("unauthorizedRequest", LoginForm)
