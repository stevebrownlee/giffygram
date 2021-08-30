import { getPosts } from "../data/postProvider.js"
import { getShowFavorites, toggleFavoritesOnly, setChosenUser, getChosenUser } from "../data/provider.js"
import { getUsers } from "../data/userProvider.js"

const applicationElement = document.querySelector(".giffygram")

applicationElement.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "userSelection") {
        const [,userId] = changeEvent.target.value.split("--")
        setChosenUser(parseInt(userId))
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

applicationElement.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "showOnlyFavorites") {
        toggleFavoritesOnly(changeEvent.target.checked)
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
    }
})

let postCount = 0

export const Footer = () => {
    /*
        Component state variables
    */
    const posts = getPosts()
    const users = getUsers()
    const favoritesDisplayed = getShowFavorites()

    /*
        Update the post count when the user changes the year selection
    */

    applicationElement.addEventListener("change", changeEvent => {
        if (changeEvent.target.id === "yearSelection") {
            const yearAsNumber = parseInt(changeEvent.target.value)
            const postCountOutput = document.querySelector("#postCount")

            postCount = postsSince(yearAsNumber)
            postCountOutput.textContent = postCount
        }
    })

    /*
        Calculate the number of posts since a given year
    */
    const postsSince = (year) => {
        const epoch = Date.parse(`01/01/${year}`)
        const postsSinceYear = []

        for (const post of posts) {
            if (post.timestamp >= epoch) {
                postsSinceYear.push(post)
            }
        }

        return postsSinceYear.length
    }

    /*
        Initial state of post count is number since 2020
    */
    postCount = postsSince(2020)


    return `
        <footer class="footer">
            <div class="footer__item">
                Posts since <select id="yearSelection">
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                </select>
                <span id="postCount">${postCount}</span>
            </div>
            <div class="footer__item">
                Posts by user <select id="userSelection">
                    ${users.map(user => {
                        const chosenUser = getChosenUser()
                        return `<option
                            ${chosenUser.id === user.id ? "selected" : ""}
                            value="user--${user.id}">${user.name}</option>
                        `
                    })}
                </select>
            </div>
            <div class="footer__item">
            Show only favorites <input id="showOnlyFavorites"
                ${favoritesDisplayed ? "checked": ""}
                type="checkbox" />
            </div>
        </footer>
    `
}
