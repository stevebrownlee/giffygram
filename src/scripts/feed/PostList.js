import { getLikes, getPosts, getUsers } from "../data/provider.js"
import { Post } from "./Post.js"

export const PostList = () => {
    const allPosts = getPosts()
    const userLikes = getLikes()
    let htmlStringOfAllPosts = ""

    for (const post of allPosts) {
        post.favorite = !!userLikes.find(like =>
            like.userId === parseInt(localStorage.getItem("gg_user")) &&
            like.postId === post.id
        )
        post.user = getUsers().find(u => u.id === post.userId)
        const htmlRepresentationOfThisPost = Post(post)
        htmlStringOfAllPosts += htmlRepresentationOfThisPost
    }

    return htmlStringOfAllPosts
}