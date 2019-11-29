import { usePosts } from "./PostProvider.js"

const eventHub = document.querySelector(".giffygram")
const contentTarget = document.querySelector(".feed")

const PostList = () => {
    const posts = usePosts()

    const render = (posts) => {
        contentTarget.innerHTML = `
            ${
            posts.map(p => `
                    <div class="post">
                        <div class="post__tagline">Posted by <a href="#" class="profileLink" id="profile--${p.user.username}">${p.user.username}</a> on ${new Date(p.timestamp).toLocaleDateString('en-US')}</div>
                        <img class="post__image" src="${p.url}" />
                        <div class="post__actions">
                            <div>
                                <img id="favorite--post" class="actionIcon" src="/images/favorite-star-blank.svg" />
                            </div>
                            <div>
                                <img id="block--post" class="actionIcon" src="/images/block.svg" />
                            </div>
                        </div>
                    </div>
                `)
            }
        `
    }

    render(posts)
}

export default PostList