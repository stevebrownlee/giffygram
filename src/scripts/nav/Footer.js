import {
    getShowFavorites,
    toggleFavoritesOnly,
    setChosenUser,
    getChosenUser
} from "../data/provider.js"
import { getPosts } from "../data/postProvider.js"
import { getUsers } from "../data/userProvider.js"

let postCount = 0
const thisYear = new Date().getFullYear()
const applicationElement = document.querySelector(".giffygram")

applicationElement.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "userSelection") {
        const [, userId] = changeEvent.target.value.split("--")
        setChosenUser(parseInt(userId))
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

applicationElement.addEventListener("click", changeEvent => {
    if (changeEvent.target.id === "showOnlyFavorites") {
        toggleFavoritesOnly(!getShowFavorites())
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

/*
    Calculate the number of posts since a given year
*/
const postsSince = (year, posts) => {
    const epoch = Date.parse(`01/01/${year}`)
    const postsSinceYear = []

    for (const post of posts) {
        if (post.timestamp >= epoch) {
            postsSinceYear.push(post)
        }
    }

    return postsSinceYear.length
}

const lastFiveYears = () => {
    const years = []
    let thisYear = new Date().getFullYear()
    for (let i = 0; i < 5; i++) {
        years.push(thisYear)
        thisYear--
    }
    return years
}



export const Footer = () => {
    /*
        Component state variables
    */
    const posts = getPosts()
    const users = getUsers()
    const chosenUser = getChosenUser()
    const favoritesDisplayed = getShowFavorites()

    /*
        Update the post count when the user changes the year selection
    */

    applicationElement.addEventListener("change", changeEvent => {
        if (changeEvent.target.id === "yearSelection") {
            const yearAsNumber = parseInt(changeEvent.target.value)
            const postCountOutput = document.querySelector("#postCount")

            postCount = postsSince(yearAsNumber, posts)
            postCountOutput.textContent = postCount
        }
    })


    /*
        Initial state of post count is number since 2020
    */
    postCount = postsSince(thisYear, posts)

    return `
        <footer class="footer">
            <div class="footer__item">
                By year <select id="yearSelection">
                    ${lastFiveYears().map(y => `<option>${y}</option>`).join("")
        }
                </select>
                <span id="postCount">${postCount}</span>
            </div>
            <div class="footer__item">
                By user <select id="userSelection">
                    <option value="user--0">Choose...</option>
                    ${users.map(user => {

            return `<option
                            ${chosenUser.id === user.id ? "selected" : ""}
                            value="user--${user.id}">${user.name}</option>
                        `
        })}
                </select>
            </div>
            <div class="footer__item">
                Favorites <span class="faveContainer">
                    <img id="showOnlyFavorites" src="${favoritesDisplayed
                        ? "/images/favorite-star-yellow.svg"
                        : "/images/favorite-star-blank.svg"
                    }" />
                </span>
            </div>
        </footer>
    `
}
