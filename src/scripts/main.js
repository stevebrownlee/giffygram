/**
 * Main logic module for what should happen on initial page load for Giffygram
 */
import useSimpleAuth from "./hooks/useSimpleAuth.js"
import LoginForm from "./auth/Login.js"
import { initializeViews } from "./ApplicationViews.js"


/**
 * If user is authenticated, load the main UI, else show login form
 */
if (useSimpleAuth().isAuthenticated()) {
    initializeViews()
} else {
    LoginForm()
}
