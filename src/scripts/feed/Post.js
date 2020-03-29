import { deletePost } from "./PostProvider.js"

const contentTarget = document.querySelector(".feed")

contentTarget.addEventListener("click", e => {
    if (e.target.id.startsWith("blockPost--")) {
        const [_,id] = e.target.id.split("--")
        deletePost(id)
    }
})

const Post = post => {
    return `
    <section class="post">
        <header>
            <h2 class="post__remark">${post.remark}</h2>
        </header>
        <div class="post__tagline">
            Posted by
            <a href="#" class="profileLink" id="profile--${post.user.username}">
                ${post.user.username}
            </a>
            on ${new Date(post.timestamp).toLocaleDateString('en-US')}
        </div>
        ${
            (post.image !== null)
                ? `<img class="post__image" src="${post.image}" />`
                : `<img class="post__image" src="${post.url}" />`
        }

        <div class="post__actions">
            <div>
                <img id="favoritePost--${post.id}" class="actionIcon" src="/images/favorite-star-blank.svg" />
            </div>
            <div>
                <img id="blockPost--${post.id}" class="actionIcon" src="/images/block.svg" />
            </div>
        </div>
    </section>
    `
}

export default Post
