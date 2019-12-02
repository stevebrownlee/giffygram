import { usePosts } from "./PostProvider.js"
import Post from "./Post.js"

const eventHub = document.querySelector(".giffygram")
const contentTarget = document.querySelector(".feed")

const PostList = () => {
    const posts = usePosts()

    eventHub.addEventListener("stateChange.posts", e => render(posts))

    const render = (posts) => {
        console.log("****  Rendering posts  ****")
        contentTarget.innerHTML = `
            ${
                posts.map(p => Post(p)).join("")
            }
        `
    }

    render(posts)

}

export default PostList
