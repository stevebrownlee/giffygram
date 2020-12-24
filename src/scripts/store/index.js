// Text from https://hipsum.co/

const applicationState = {
    currentUser: {},
    users: [
        { "id": 1, "email": "ray@medrano.com", "password": "ray" },
        { "id": 2, "email": "meg@ducharme.com", "password": "meg" },
        { "id": 3, "email": "mark@ellis.com", "password": "mark" },
        { "id": 4, "email": "daniella@agnoletti.com", "password": "daniella" },
        { "id": 5, "email": "kimmy@bird.com", "password": "kimmy" },
        { "id": 6, "email": "emily@lemmon.com", "password": "emily" }
    ],
    posts: [
        {
            "id": 1,
            "userId": 1,
            "title": "My first post",
            "imageURL": "https://media.giphy.com/media/3oz8xyUoD2HlTIcdTW/giphy.gif",
            "description": "Jianbing butcher post-ironic brunch marfa, listicle quinoa kickstarter vinyl poke cornhole snackwave yr flexitarian.",
            "timestamp": 1608580619498
        },
        {
            "id": 2,
            "userId": 2,
            "title": "Dinner",
            "imageURL": "https://media.giphy.com/media/4RslNp4SUqAoM/giphy.gif",
            "description": "Messenger bag hella gochujang adaptogen, aesthetic sartorial before they sold out franzen sustainable thundercats.",
            "timestamp": 1608680619498
        },
        {
            "id": 3,
            "userId": 2,
            "title": "Graduation!",
            "imageURL": "https://media.giphy.com/media/lSPlEENLTonvclZP44/giphy.gif",
            "description": "Pop-up biodiesel pickled crucifix. Tousled succulents banjo bicycle rights.",
            "timestamp": 1608720619498
        }
    ],
    userLikes: [
        {
            "userId": 1,
            "postId": 2
        }
    ]
}

export const saveNewPost = (newPostObject) => {
    let lastId = applicationState.posts[applicationState.posts.length - 1].id
    newPostObject.id = lastId++
    applicationState.posts.push(newPostObject)
}

export const getUsers = () => {
    return [...applicationState.users]
}

export const getPosts = () => {
    // TODO: Sort by date desc
    return [...applicationState.posts].sort((a, b) => {
        return b.timestamp - a.timestamp
    })
    // return [...applicationState.posts]
}

export const getUserLikes = () => {
    return [...applicationState.userLikes]
}

export const getCurrentUser = () => {
    return {...applicationState.currentUser}
}

export const setCurrentUser = (user) => {
    applicationState.currentUser = user
}

