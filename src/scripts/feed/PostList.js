import { usePosts } from "./PostProvider.js"
import Post from "./Post.js"

const eventHub = document.querySelector(".giffygram")
const contentTarget = document.querySelector(".feed")

const PostList = () => {

    const render = (posts) => {
        console.log("****  Rendering posts  ****")
        contentTarget.innerHTML = `
            ${
                posts.map(p => Post(p)).join("")
            }
        `
    }

    const posts = usePosts()
    render(posts)

    eventHub.addEventListener("stateChange.posts", e => {
        if (contentTarget.innerHTML !== "") {
            const updatedPosts = usePosts()
            render(updatedPosts)
        }
    })

}

export default PostList
