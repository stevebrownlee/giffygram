import { getMessages } from "../data/messageProvider.js"
import { clearFilters, setMessageDisplay } from "../data/provider.js"
import { logout, getCurrentUser } from "../data/userProvider.js"

document.addEventListener("click", e => {
    if (e.target.id === "logout") {
        logout()
    }
})

document.addEventListener("click", e => {
    if (e.target.classList.contains("notification__count")) {
        setMessageDisplay(true)
    }
})

document.addEventListener("click", e => {
    if (e.target.id === "logo" || e.target.parentNode.classList.contains("navigation__name")) {
        clearFilters()
    }
})

export const NavBar = () => {
    const messages = getMessages()
    const user = getCurrentUser()

    return `
        <nav class="navigation">
            <div class="navigation__item navigation__icon">
                <img src="/images/pb.png" alt="Giffygram icon" id="logo" />
            </div>
            <div class="navigation__item navigation__name">
                Giffygram
            </div>
            <div class="navigation__item navigation__search">

            </div>
            <div class="navigation__item navigation__message">
                <img id="directMessageIcon" src="/images/fountain-pen.svg" alt="Direct message" />
                <div class="notification__count">
                    ${ messages.length }
                </div>
            </div>
            <div class="navigation__item navigation__logout">
                <button id="logout" class="fakeLink">Logout ${user.name}</button>
            </div>
        </nav>
        `
}
