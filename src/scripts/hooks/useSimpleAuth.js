let user = null
let token = null

const authenticate = res => {
    localStorage.setItem("gg_token", JSON.stringify(res))
    user = res.user
    token = res.accessToken
}

const useSimpleAuth = () => {
    if (localStorage.getItem("gg_token") !== null && token === null) {
        const credentials = JSON.parse(localStorage.getItem("gg_token"))
        user = credentials.user.id
        token = credentials.accessToken
    }

    const isAuthenticated = () => localStorage.getItem("gg_token") !== null

    const register = userInfo => {
        return fetch("http://localhost:8088/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(_ => _.json())
            .then(res => {
                if ("accessToken" in res) {
                    authenticate(res)
                }
            })
    }

    const login = credentials => {
        return fetch("http://localhost:8088/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(credentials)
        })
            .then(_ => _.json())
            .then(res => {
                if ("accessToken" in res) {
                    authenticate(res)
                }
            })
    }

    const logout = () => {
        localStorage.removeItem("gg_token")
    }

    return { user, isAuthenticated, logout, login, register, token }
}

export default useSimpleAuth
