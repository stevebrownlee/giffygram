import { usePosts, createPost, getPosts } from "./PostProvider.js"
import Post from "./Post.js"
import PostEntry from "./PostEntry.js"
import useSimpleAuth from "../hooks/useSimpleAuth.js"

const eventHub = document.querySelector(".giffygram")
const contentTarget = document.querySelector(".feed")

eventHub.addEventListener("postsStateChange", e => {
    const updatedPosts = usePosts()
    render(updatedPosts)
})

const uploadFile = file => {
    const auth = useSimpleAuth()

    let url = "http://localhost:8088/posts"
    let formData = new FormData()
    formData.append('file', file)

    let reader = new FileReader()
    reader.onloadend = function() {
        createPost({
            userId: auth.user,
            image: reader.result,
            url: "",
            timestamp: Date.now()
        })
    }
    reader.readAsDataURL(file)
}

const intializeDrop = () => {
    const dropZone = document.querySelector(".newPost__drop")

    const highlight = e => dropZone.classList.add('highlight')
    const unhighlight = e => dropZone.classList.remove('highlight')

    const preventDefaults = e => {
        e.preventDefault()
        e.stopPropagation()
    }

    ;['dragenter', 'dragover', 'dragleave', 'drop'].forEach(e => dropZone.addEventListener(e, preventDefaults, false))
    ;['dragenter', 'dragover'].forEach(e => dropZone.addEventListener(e, highlight, false))
    ;['dragleave', 'drop'].forEach(e => dropZone.addEventListener(e, unhighlight, false))

    dropZone.addEventListener('drop', e => uploadFile(e.dataTransfer.files[0]), false)
}

const render = (posts) => {
    console.log("****  Rendering posts  ****")

    contentTarget.innerHTML = `
        ${ PostEntry() }
        ${ posts.map(Post).join("") }
    `

    intializeDrop()
}

const PostList = () => {
    getPosts().then(() => {
        const posts = usePosts()
        render(posts)
    })
}

export default PostList
