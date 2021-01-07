/**
 * Main logic module for what should happen on initial page load for Giffygram
 */
import { NavBar } from "./nav/NavBar.js"
import { LoginForm } from "./auth/Login.js"
import { GiffyGram } from "./GiffyGram.js"

const contentTarget = document.querySelector(".giffygram")

export const renderApp = () => {
    const user = parseInt(localStorage.getItem("gg_user"))

    /**
     * If user is authenticated, load the main UI, else show login form
     */
    if (user) {
        console.log("User authenticated")
        contentTarget.innerHTML = GiffyGram()
    } else {
        console.log("User not authenticated")
        contentTarget.innerHTML = LoginForm()
    }
}

renderApp()



/*
    * Talk about objects and state
    * Talk about databases, a single place where data is stored
    * Talk about how a browser based application loads some, or all of that data, and
        stores it as state to be rendered as HTML
    * Give students the main module
    * Give students the data store module
    * Give students the Post module
    * Give students the GiffyGram module
*/