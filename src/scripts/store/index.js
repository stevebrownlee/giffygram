/*
    To get even more fake posts data, visit https://mockaroo.com/schemas/287232
    and generate as many rows as you like, up to 1000.
*/



const applicationState = {
    currentUser: {},
    feed: {
        chosenUser: null,
        displayFavorites: false
    },
    users: [
        { id: 1, name: "Ray Medrano", email: "ray@medrano.com", password: "ray" },
        { id: 2, name: "Meg Ducharme", email: "meg@ducharme.com", password: "meg" },
        { id: 3, name: "Mark Ellis", email: "mark@ellis.com", password: "mark" },
        { id: 4, name: "Daniella Agnoletti", email: "daniella@agnoletti.com", password: "daniella" },
        { id: 5, name: "Kimmy Bird", email: "kimmy@bird.com", password: "kimmy" },
        { id: 6, name: "Emily Lemmon", email: "emily@lemmon.com", password: "emily" }
    ],
    posts: [
        {
            "id": 1,
            "userId": 2,
            "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
            "imageURL": "https://media.giphy.com/media/YqGeOQ0u6hB5u/giphy-downsized.gif",
            "timestamp": 1580005022812,
            "title": "Self-enabling directional array"
          }, {
            "id": 2,
            "imageURL": "https://media.giphy.com/media/26xBI73gWquCBBCDe/giphy.gif",
            "userId": 6,
            "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
            "timestamp": 1561695022812,
            "title": "Enhanced global utilisation"
          }, {
            "id": 3,
            "userId": 1,
            "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
            "timestamp": 1560695022812,
            "imageURL": "https://media.giphy.com/media/ai54771DmS5P2/giphy-downsized.gif",
            "title": "Centralized uniform internet solution"
          }, {
            "id": 4,
            "imageURL": "https://media.giphy.com/media/IMDSOJvLn9RaU/giphy.gif",
            "userId": 3,
            "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
            "timestamp": 1559695022812,
            "title": "Compatible neutral instruction set"
          }, {
            "id": 5,
            "userId": 3,
            "imageURL": "https://media.giphy.com/media/1hM7Ldvcpps01Cwles/giphy-downsized.gif",
            "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
            "timestamp": 1558995022812,
            "title": "Integrated foreground hierarchy"
          }, {
            "id": 6,
            "userId": 5,
            "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
            "imageURL": "https://media.giphy.com/media/3hUqPBrfHzfZ6/giphy-downsized.gif",
            "timestamp": 1537695022812,
            "title": "Total holistic task-force"
          }, {
            "imageURL": "https://media.giphy.com/media/d8WjGORtSEWqc/giphy-downsized.gif",
            "id": 7,
            "userId": 4,
            "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
            "timestamp": 1522695022812,
            "title": "Future-proofed context-sensitive software"
        }, {
            "id": 8,
            "imageURL": "https://media.giphy.com/media/Eva5ChclYOKly/giphy.gif",
            "userId": 4,
            "description": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
            "timestamp": 1514695022812,
            "title": "Balanced exuding definition"
        }, {
            "id": 9,
            "userId": 5,
            "imageURL": "https://media.giphy.com/media/S18kGlKwjxNp6/giphy.gif",
            "description": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
            "timestamp": 1509695022812,
            "title": "Programmable client-driven function"
          }, {
            "id": 10,
            "userId": 1,
            "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
            "imageURL": "https://media.giphy.com/media/BtQVuwFhqIpOw/giphy.gif",
            "timestamp": 1504795022812,
            "title": "Open-source bifurcated policy"
          }
    ],
    likes: [
        {
            id: 1,
            userId: 1,
            postId: 2
        },
        {
            id: 2,
            userId: 3,
            postId: 2
        },
        {
            id: 3,
            userId: 3,
            postId: 5
        },
        {
            id: 4,
            userId: 3,
            postId: 7
        },
        {
            id: 5,
            userId: 2,
            postId: 1
        }
    ]
}

export const saveNewPost = (newPostObject) => {
    let lastId = applicationState.posts[applicationState.posts.length - 1].id
    newPostObject.id = lastId++
    applicationState.posts.push(newPostObject)


    /*
        When the delete function is put in, students will discover that
        it leads to an error if they add a new one if they others all get
        deleted. This is the code they would need to figure out.


            let lastId = 0
            if (applicationState.posts.length) {
                lastId = applicationState.posts[applicationState.posts.length - 1].id
            }
            newPostObject.id = lastId++
            applicationState.posts.push(newPostObject)
    */
}

export const getUsers = () => {
    const currentUser = parseInt(localStorage.getItem("gg_user"))
    return [...applicationState.users].filter(u => u.id !== currentUser)
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
    const index = applicationState.posts.findIndex(p => p.id === id)
    applicationState.posts.splice(index, 1)
}

export const setChosenUser = userId => {
    applicationState.feed.chosenUser = userId
    applicationState.feed.displayFavorites = false
}

export const getPosts = () => {
    // Step 1: Sort all the posts by date
    let posts = [...applicationState.posts].sort((a, b) => {
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

    // Return the posts that have been sorted and filtered
    return posts
    /*
        Students start with the following code. They need to watch a
        video and have a reference link to the JavaScript sort method
        to do the code above.

            return [...applicationState.posts]


        Later, a practice section should be to add two buttons to sort
        in both directions. This function should be modified to
        support both.
    */
}

export const getLikes = () => {
    return [...applicationState.likes]
}

export const getCurrentUser = () => {
    return {...applicationState.currentUser}
}

export const setCurrentUser = (user) => {
    applicationState.currentUser = user
}

