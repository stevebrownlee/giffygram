import PostList from "./feed/PostList.js"
import { getPosts } from "./feed/PostProvider.js"

const GiffyGram = () => {
    // Show friend bar


    // Show new message box

    // Show main main feed
    getPosts().then(PostList)


    // Show updates bar
}

export default GiffyGram
