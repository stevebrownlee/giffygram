let posts = []
const eventHub = document.querySelector(".giffygram")

export const usePosts = () => {
    const sorted = posts.sort((a, b) => a.timestamp - b.timestamp)
    return sorted
}

const setPosts = postArray => {
    posts = postArray.splice(0)
    eventHub.dispatchEvent(new CustomEvent("stateChange.posts"))
}

export const getPosts = () => {
    return fetch("http://localhost:8088/posts?_expand=user", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("gg_token")}`
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
}
