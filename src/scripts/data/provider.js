const apiURL = "http://localhost:8088"
const applicationElement = document.querySelector(".giffygram")


const applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false
    },
    users: [],
    posts: [],
    likes: [],
    messages: []
}

export const fetchMessages = () => {
    return fetch(`${apiURL}/messages`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.messages = data

                if (applicationState.messages.length !== data.length) {
                    applicationElement.dispatchEvent(new CustomEvent("stateChanged"))
                }
            }
        )
}

export const getMessages = () => {
    return [...applicationState.messages]
}

export const saveMessage = (message) => {
    return fetch(`${apiURL}/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
        .then(response => response.json())
        .then(() => {
            return fetchMessages()
        })
}

export const fetchPosts = () => {
    return fetch(`${apiURL}/posts`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.posts = data
            }
        )
}

export const getPosts = () => {
    let posts = applicationState.posts.sort((a, b) => {
        return b.timestamp - a.timestamp
    })

    // If a user was chosen in the footer, filter to that user's posts
    if (applicationState.feed.displayFavorites === true) {
        const favePosts = applicationState.likes.filter(l => l.userId === parseInt(localStorage.getItem("gg_user")))

        for (const favePost of favePosts) {
            favePost.post = posts.find(p => p.id === favePost.postId)
        }

        posts = favePosts.map(fp => fp.post)
    }
    else if (applicationState.feed.chosenUser !== null) {
        const userPosts = []

        for (const post of posts) {
            if (post.userId === applicationState.feed.chosenUser) {
                userPosts.push(post)
            }
        }

        posts = userPosts
    }

    return posts
}

export const savePost = (post) => {
    return fetch(`${apiURL}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
        .then(response => response.json())
        .then(() => {
            return fetchPosts()
        })
}

export const fetchUsers = () => {
    return fetch(`${apiURL}/users`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.users = data
            }
        )
}

export const getUsers = () => {
    return [...applicationState.users]
}


export const toggleFavoritesOnly = (choice) => {
    if (choice) {
        applicationState.feed.chosenUser = null
    }
    applicationState.feed.displayFavorites = choice
}

export const getChosenUser = () => {
    return applicationState.feed.chosenUser
}

export const getShowFavorites = () => {
    return applicationState.feed.displayFavorites
}

export const deletePost = (id) => {
    return fetch(`${apiUrl}/posts/${id}`, {
        method: "DELETE"
    })
        .then(() => {
            return fetchPosts()
        })
}

export const setChosenUser = userId => {
    applicationState.feed.chosenUser = userId
    applicationState.feed.displayFavorites = false
}

export const fetchLikes = () => {
    return fetch(`${apiURL}/likes`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.likes = data
            }
        )
}

export const getLikes = () => {
    return [...applicationState.likes]
}
