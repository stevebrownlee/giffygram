import { NavBar } from "./nav/NavBar.js"
import { PostEntry } from "./feed/PostEntry.js"
import { PostList } from "./feed/PostList.js"
import { Footer } from "./nav/Footer.js"

export const GiffyGram = () => {

    // Show main main UI
    return `
        ${NavBar()}
        <div class="giffygram__feed">
            ${PostEntry()}
            ${PostList()}
        </div>
        ${Footer()}
    `
}
