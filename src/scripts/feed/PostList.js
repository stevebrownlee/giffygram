import { usePosts, createPost } from "./PostProvider.js"
import Post from "./Post.js"
import PostEntry from "./PostEntry.js"
import useSimpleAuth from "../hooks/useSimpleAuth.js"

const eventHub = document.querySelector(".giffygram")
const contentTarget = document.querySelector(".feed")

eventHub.addEventListener("postsStateChange", e => {
    if (contentTarget.innerHTML !== "") {
        const updatedPosts = usePosts()
        render(updatedPosts)
    }
})

const uploadFile = file => {
    const auth = useSimpleAuth()

    let url = "http://localhost:8088/posts"
    let formData = new FormData()
    formData.append('file', file)

    createPost({
        userId: auth.user.id,
        image: formData,
        url: "",
        timestamp: Date.now()
    })
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

    const handleFiles = files => ([...files]).forEach(uploadFile)

    const handleDrop = e => {
        let dt = e.dataTransfer
        let files = dt.files
        handleFiles(files)
    }

    dropZone.addEventListener('drop', handleDrop, false)
}

const render = (posts) => {
    console.log("****  Rendering posts  ****")

    contentTarget.innerHTML = `
        ${ PostEntry()}
        ${ posts.map(p => Post(p)).join("")}
    `

    intializeDrop()
}

const PostList = () => {
    const posts = usePosts()
    render(posts)
}

export default PostList
