import useSimpleAuth from "../hooks/useSimpleAuth.js"

const contentTarget = document.querySelector(".feed")
const eventHub = document.querySelector(".giffygram")
const updates = document.querySelector(".updates")

eventHub.addEventListener("click", clickEvent => {
    const auth = useSimpleAuth()

    if (clickEvent.target.id === "loginButton") {
        auth.login({
            email: document.querySelector("input[name='email']").value,
            password: document.querySelector("input[name='password']").value
        })

        eventHub.dispatchEvent(
            new CustomEvent("login")
        )
    }
})

const LoginForm = () => {

    const render = () => {
        updates.innerHTML = ""
        contentTarget.innerHTML = `
            <form>
                <fieldset>
                    <label for="email">Email:</label>
                    <input type="text" name="email" autofocus placeholder="Email address" />
                </fieldset>
                <fieldset>
                    <label for="password">Password:</label>
                    <input type="password" name="password" placeholder="Password" />
                </fieldset>
            </form>
            <button id="loginButton">Login</button>
        `
    }

    render()

    eventHub.addEventListener("unauthorizedRequest", render)
}

export default LoginForm