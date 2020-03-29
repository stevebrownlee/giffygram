import { getPosts } from "../feed/PostProvider.js"

const eventHub = document.querySelector(".giffygram")
const contentTarget = document.querySelector(".navigation")

contentTarget.addEventListener("click", e => {
    if (e.target.id === "directMessageIcon") {
        eventHub.dispatchEvent(
            new CustomEvent("directMessage")
        )
    }
    if (e.target.id === "getLatestPosts") {
        getPosts()
    }
})

const NavBar = () => {

    const render = () => {
        contentTarget.innerHTML = `
            <div class="navigation__item navigation__icon">
                <img src="/images/pb.png" alt="Giffygram icon" />
            </div>
            <div class="navigation__item navigation__name">
                Giffygram
            </div>
            <div class="navigation__item navigation__search">

            </div>
            <div class="navigation__item navigation__message">
                <img id="directMessageIcon" src="/images/fountain-pen.svg" alt="Direct message" />
            </div>
        `
    }

    render()
}

export default NavBar
