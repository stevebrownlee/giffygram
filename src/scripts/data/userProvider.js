import { Settings } from "./settings.js"

const applicationElement = document.querySelector(".giffygram")

const applicationState = {
    currentUser: {},
    users: []
}

export const logout = () => {
    localStorage.removeItem("gg_user")
    applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setCurrentUser = (user) => {
    applicationState.currentUser = user
}

export const getCurrentUser = () => {
    return applicationState.currentUser
}

export const fetchUsers = () => {
    return fetch(`${Settings.apiURL}/users`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.users = data
            }
        )
}

export const getUsers = () => {
    return [...applicationState.users]
}
