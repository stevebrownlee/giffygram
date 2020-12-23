import { showGiffygram } from "../main.js"
import { getUsers } from "../store/index.js"


document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "loginButton") {
        let foundUser = null
        const userState = getUsers()

        const email = document.querySelector("input[name='email']").value
        const password = document.querySelector("input[name='password']").value

        for (const user of userState) {
            if (user.email === email && user.password === password) {
                foundUser = user
            }
        }

        if (foundUser !== null) {
            showGiffygram()
        }
    }
})

export const LoginForm = () => {
    return `
            <form>
                <fieldset>
                    <label for="email">Email:</label>
                    <input value="steve@brownlee.com" type="text" name="email" autofocus placeholder="Email address" />
                </fieldset>
                <fieldset>
                    <label for="password">Password:</label>
                    <input type="password" value="steve" name="password" placeholder="Password" />
                </fieldset>
            </form>
            <button id="loginButton">Login</button>
        `
}
