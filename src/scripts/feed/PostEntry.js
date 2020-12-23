export const PostHTML = (postObjectToRender) => {
    return `
    <div class="newPost">
        <textarea class="newPost__comment" placeholder="Snarky comment about gif..."></textarea>
        <div class="newPost__drop">
            <div class="newPost__prompt">Drag file here...</div>
            <div class="newPost__plus">+</div>
        </div>
        <div class="newPost__upload">
            <div class="newPost__uploadPrompt">or upload:</div>
            <div class="newPost__fileUpload"><input type="file" class="" name="gif" accept="image/*"></div>
        </div>
        <button id="newPost__submit"></button>
    </div>
    `
}
