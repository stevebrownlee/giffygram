import { getPosts } from "../store/index.js"

const posts = getPosts()
const applicationElement = document.querySelector(".giffygram")

applicationElement.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "yearSelection") {
        const chosenYear = changeEvent.target.value
        document.querySelector("#postCount").textContent = postsSince(parseInt(chosenYear))
    }
})

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

const postCount = postsSince(2020)

export const Footer = () => {
    return `
        <footer class="footer">
            <div class="navigation__item">
                Posts since <select id="yearSelection">
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                    <option>2017</option>
                </select>
                <span id="postCount">${postCount}</span>

            </div>
        </footer>
    `
}
