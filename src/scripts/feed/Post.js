const Post = post => {
    return `
        <section class="post">
            <header class="post__header">Posted by ${post.author.username}</header>
        </section>
    `
}