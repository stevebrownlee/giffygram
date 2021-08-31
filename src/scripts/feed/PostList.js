import { getLikes, getPosts } from "../data/postProvider.js"
import { getCurrentUser, getUsers } from "../data/userProvider.js"
import { Post } from "./Post.js"

export const PostList = () => {
    const allPosts = getPosts()
    const userLikes = getLikes()
    const users = getUsers()
    const currentUser = getCurrentUser()

    return `
        ${
            allPosts.map(
                currentPost => {
                    /*
                        Determine if the current post is favorited by the current user
                        then add a new `favoriteId` property for use when generating the
                        HTML representation. Default to 0 if post not favorited.
                    */
                   currentPost.favoriteId = userLikes.find(like =>
                        like.userId === currentUser.id &&
                        like.postId === currentPost.id
                    )?.id || 0

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