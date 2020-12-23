/**
 * Main logic module for what should happen on initial page load for Giffygram
 */
import NavBar from "./nav/NavBar.js"
import { LoginForm } from "./auth/Login.js"
import { GiffyGram } from "./GiffyGram.js"
import { getCurrentUser } from "./store/index.js"


const contentTarget = document.querySelector(".giffygram")

export const showLogin = function () {
    contentTarget.innerHTML = LoginForm()
}

export const showGiffygram = function () {
    contentTarget.innerHTML = GiffyGram()
}


/**
 * If user is authenticated, load the main UI, else show login form
 */
const user = getCurrentUser()
if ("id" in user) {
    console.log("User authenticated")
    contentTarget.innerHTML = NavBar()
    contentTarget.innerHTML += GiffyGram()
} else {
    console.log("User not authenticated")
    contentTarget.innerHTML = LoginForm()
}
