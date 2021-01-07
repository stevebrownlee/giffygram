import { getPosts } from "../store/index.js"
import { Post } from "./Post.js"

export const PostList = () => {
    const allPosts = getPosts()
    let htmlStringOfAllPosts = ""

    for (const post of allPosts) {
        const htmlRepresentationOfThisPost = Post(post)
        htmlStringOfAllPosts += htmlRepresentationOfThisPost
    }

    return htmlStringOfAllPosts
}