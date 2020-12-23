import { Post } from "./feed/Post.js"
import { PostEntry } from "./feed/PostEntry.js"
import { getPosts } from "./store/index.js"

export const GiffyGram = () => {
    // Show friend bar


    // Show new message box


    // Show main main feed
    const allPosts = getPosts()
    let htmlStringOfAllPosts = ""

    for (const post of allPosts) {
        const htmlRepresentationOfThisPost = Post(post)
        htmlStringOfAllPosts += htmlRepresentationOfThisPost
    }

    return `
        <div class="giffygram__feed">
            ${PostEntry()}
            ${htmlStringOfAllPosts}
        </div>
    `

    // Show updates bar
}
