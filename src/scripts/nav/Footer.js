import { getChosenUser, getPosts, getUsers, setChosenUser } from "../store/index.js"

const posts = getPosts()
const users = getUsers()
const applicationElement = document.querySelector(".giffygram")

/*
    Update the post count when the user changes the year selection
*/
applicationElement.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "yearSelection") {
        const chosenYear = changeEvent.target.value
        document.querySelector("#postCount").textContent = postsSince(parseInt(chosenYear))
    }
})

applicationElement.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "userSelection") {
        setChosenUser(parseInt(changeEvent.target.value))
        applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
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
const postCount = postsSince(2020)

export const Footer = () => {
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
                    ${users.map(user => `
                        <option
                            ${getChosenUser() === user.id ? "selected" : ""}
                         id="user--${user.id}">${user.id}</option>
                    `)}
                </select>
            </div>
        </footer>
    `
}
