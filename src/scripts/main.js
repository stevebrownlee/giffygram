/**
 * Main logic module for what should happen on initial page load for Giffygram
 */
import useSimpleAuth from "./hooks/useSimpleAuth.js"
import LoginForm from "./auth/Login.js"
import { Giffygram } from "./ApplicationViews.js"


/**
 * If user is authenticated, load the main UI, else show login form
 */
if (useSimpleAuth().isAuthenticated()) {
    Giffygram()
} else {
    LoginForm()
}


/**
 * Event listener section
 */
const eventHub = document.querySelector(".giffygram")

// What should happen immediately after a user authenticates?
eventHub.addEventListener("login", Giffygram)

/**
 * What should happen when an expired, or missing token, causes
 * an unauthorized request to the API?
 */
eventHub.addEventListener("unauthorizedRequest", LoginForm)
