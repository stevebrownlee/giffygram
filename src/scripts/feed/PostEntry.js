import { renderApp } from "../main.js"
import { saveNewPost } from "../store/index.js"

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "newPost__submit") {
        const title = document.querySelector("input[name='postTitle']").value
        const url = document.querySelector("input[name='postURL']").value
        const description = document.querySelector("textarea[name='postDescription']").value

        const postObect = {
            title: title,
            imageURL: url,
            description: description,
            userId: parseInt(localStorage.getItem("gg_user")),
            timestamp: Date.now()
        }

        saveNewPost(postObect)

        renderApp()
    }
})

export const PostEntry = () => {
    return `
    <div class="newPost">
        <div>
            <input name="postTitle" class="newPost__input" type="text" placeholder="Title"  />
        </div>
        <div>
            <input name="postURL" class="newPost__input" type="text" placeholder="URL of gif"  />
        </div>
        <textarea name="postDescription" class="newPost__input newPost__description" placeholder="Story behind your gif..."></textarea>
        <button id="newPost__submit">Save</button>
    </div>
    `
}
