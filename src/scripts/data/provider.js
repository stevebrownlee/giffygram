const applicationElement = document.querySelector(".giffygram")

const choices = {
    chosenUser: { id: 0 },
    displayFavorites: false,
    displayMessages: false
}

export const clearFilters = () => {
    choices.chosenUser = { id: 0 }
    choices.displayFavorites = false
    choices.displayMessages = false
    applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
}

export const toggleFavoritesOnly = (choice) => {
    if (choice) {
        choices.chosenUser = { id: 0 }
    }
    choices.displayFavorites = choice
    applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getShowFavorites = () => {
    return choices.displayFavorites
}

export const getChosenUser = () => {
    return choices.chosenUser
}

export const setChosenUser = userId => {
    choices.chosenUser = { id: userId }
    choices.displayFavorites = false
    applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setMessageDisplay = () => {
    choices.displayMessages = true
    applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getMessageDisplay = () => {
    return choices.displayMessages
}
