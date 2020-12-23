import useSimpleAuth from "../hooks/useSimpleAuth.js"

let posts = []
const eventHub = document.querySelector(".giffygram")

export const usePosts = () => {
    const sorted = posts.sort((a, b) => b.timestamp - a.timestamp)
    return sorted
}

const setPosts = postArray => {
    posts = postArray
    eventHub.dispatchEvent(new CustomEvent("postsStateChange"))
}

export const createPost = post => {
    const auth = useSimpleAuth()

    return fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth.token}`
        },
        body: JSON.stringify(post)

    })
        .then(_ => _.json())
        .then(getPosts)
}

export const deletePost = id => {
    const auth = useSimpleAuth()

    return fetch(`http://localhost:3000/posts/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${auth.token}`
        }
    })
        .then(_ => _.json())
        .then(getPosts)
}

export const getPosts = () => {
    const auth = useSimpleAuth()

    return fetch("http://localhost:3000/posts?_expand=user", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${auth.token}`
        }
    })
        .then(_ => {
            if (_.status === 401) {
                eventHub.dispatchEvent( new CustomEvent("unauthorizedRequest") )
                throw "Unauthorized request exception"
            } else {
                return _.json()
            }
        })
        .then(posts => {
            if (Array.isArray(posts)) {
                setPosts(posts)
            }
        })
        // .catch(err => console.log)
}
