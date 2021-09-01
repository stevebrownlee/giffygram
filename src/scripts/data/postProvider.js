import { getChosenUser, getShowFavorites } from "./provider.js"
import { Settings } from "./settings.js"
import { getCurrentUser } from "./userProvider.js"

const applicationElement = document.querySelector(".giffygram")

const applicationState = {
    posts: [],
    likes: []
}

export const fetchPosts = () => {
    return fetch(`${Settings.apiURL}/posts`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.posts = data
            }
        )
}

export const getPosts = () => {
    const chosenUser = getChosenUser()

    // First sort the posts by date
    let posts = applicationState.posts
        .map(p => ({...p}))
        .sort((a, b) => b.timestamp - a.timestamp)

    // If user chose to display favorites
    if (getShowFavorites() === true) {
        posts = filterFavorites(posts)
    }
    // If a user was chosen in the footer, filter to that user's posts
    else if (chosenUser.id !== 0) {
        posts = userPosts(posts)
    }

    return posts
}

export const favoritePost = (id) => {
    return fetch(`${Settings.apiURL}/likes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId: getCurrentUser().id,
            postId: id
        })
    })
        .then(() => {
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const unfavoritePost = (id) => {
    return fetch(`${Settings.apiURL}/likes/${id}`, { method: "DELETE" })
        .then(() => {
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const savePost = (post) => {
    return fetch(`${Settings.apiURL}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
        .then( response => response.json() )
        .then( () => fetchPosts() )
}

export const deletePost = (id) => {
    return fetch(`${Settings.apiURL}/posts/${id}`, { method: "DELETE" })
        .then(() => {
            applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
        })
}

export const fetchLikes = () => {
    return fetch(`${Settings.apiURL}/likes`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.likes = data
            }
        )
}

export const getLikes = () => {
    return applicationState.likes.map(l => ({...l}))
}


const filterFavorites = (posts) => {
    const userId = getCurrentUser().id
    const favePosts = applicationState.likes.filter(l => l.userId === userId)

    for (const favePost of favePosts) {
        favePost.post = posts.find(p => p.id === favePost.postId)
    }

    return favePosts.map(fp => fp.post)
}

const userPosts = (posts) => {
    const chosenUser = getChosenUser()
    const userPosts = []

    for (const post of posts) {
        if (post.userId === chosenUser) {
            userPosts.push(post)
        }
    }

    return userPosts
}
