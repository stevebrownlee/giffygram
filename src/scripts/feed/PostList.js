import { getLikes, getPosts } from "../data/postProvider.js"
import { getUsers } from "../data/userProvider.js"
import { Post } from "./Post.js"

export const PostList = () => {
    const allPosts = getPosts()
    const userLikes = getLikes()
    const users = getUsers()

    return `
        ${
            allPosts.map(
                currentPost => {
                    /*
                        Determine if the current post is favorited by the current user
                        then add a new `favorite` property for use when generating the
                        HTML representation
                    */
                    currentPost.favorite = !!userLikes.find(like =>
                        like.userId === parseInt(localStorage.getItem("gg_user")) &&
                        like.postId === currentPost.id
                    )

                    /*
                        Who created this post? Add a new `user` property for use when
                        generating the HTML representation
                    */
                    currentPost.user = users.find(u => u.id === currentPost.userId)

                    // Generate the HTML representation for the current post
                    return Post(currentPost)
                }
            )
        }
    `
}