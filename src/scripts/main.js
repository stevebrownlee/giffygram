/**
 * Main logic module for what should happen on initial page load for Giffygram
 */
import useSimpleAuth from "./hooks/useSimpleAuth.js"
import LoginForm from "./auth/Login.js"
import NavBar from "./nav/NavBar.js"
import "./views/ApplicationViews.js"
import GiffyGram from "./GiffyGram.js"

NavBar()

/**
 * If user is authenticated, load the main UI, else show login form
 */
if (useSimpleAuth().isAuthenticated()) {
    console.log("User authenticated")
    GiffyGram()
} else {
    console.log("User not authenticated")
    LoginForm()
}
