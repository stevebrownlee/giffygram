// Text from https://hipsum.co/

const applicationState = {
    currentUser: {},
    posts: [
        {
            "id": 1,
            "userId": 1,
            "title": "My first post",
            "imageURL": "https://picsum.photos/200/300",
            "description": "Jianbing butcher post-ironic brunch marfa, listicle quinoa kickstarter vinyl poke cornhole snackwave yr flexitarian.",
            "timestamp": 1608580619498
        },
        {
            "id": 2,
            "userId": 2,
            "title": "Dinner",
            "imageURL": "https://picsum.photos/200/300",
            "description": "Messenger bag hella gochujang adaptogen, aesthetic sartorial before they sold out franzen sustainable thundercats.",
            "timestamp": 1608680619498
        }
    ],
    users: [
        {
            "id": 1,
            "email": "steve@brownlee.com",
            "password": "steve"
        },
        {
            "id": 2,
            "email": "andy@collins.com",
            "password": "andy"
        }
    ],
    userLikes: [
        {
            "userId": 1,
            "postId": 2
        }
    ]
}

export const getUsers = () => {
    return [...applicationState.users]
}

export const getPosts = () => {
    return [...applicationState.posts]
}

export const getUserLikes = () => {
    return [...applicationState.userLikes]
}

export const getCurrentUser = () => {
    return {...applicationState.currentUser}
}


