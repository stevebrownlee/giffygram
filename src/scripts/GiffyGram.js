import { Post } from "./feed/Post.js"
import { getPosts } from "./store/index.js"

export const GiffyGram = () => {
    // Show friend bar


    // Show new message box

    // Show main main feed
    const allPosts = getPosts()
    let htmlStringOfAllPosts = ""

    for (const post of allPosts) {
        console.log(post)
        const htmlRepresentationOfThisPost = Post(post)
        htmlStringOfAllPosts += htmlRepresentationOfThisPost
    }

    return htmlStringOfAllPosts

    // Show updates bar
}
