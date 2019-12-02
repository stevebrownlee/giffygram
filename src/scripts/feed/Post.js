const Post = post => {
    return `
    <section class="post">
        <div class="post__tagline">
            Posted by
            <a href="#" class="profileLink" id="profile--${post.user.username}">
                ${post.user.username}
            </a>
            on ${new Date(post.timestamp).toLocaleDateString('en-US')}
        </div>
        <img class="post__image" src="${post.url}" />
        <div class="post__actions">
            <div>
                <img id="favorite--post" class="actionIcon" src="/images/favorite-star-blank.svg" />
            </div>
            <div>
                <img id="block--post" class="actionIcon" src="/images/block.svg" />
            </div>
        </div>
    </section>
    `
}

export default Post
