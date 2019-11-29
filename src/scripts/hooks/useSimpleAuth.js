const useSimpleAuth = () => {
    let loggedIn = false
    const isAuthenticated = () => loggedIn || localStorage.getItem("gg_token") !== null

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
                    localStorage.setItem( "gg_token", res.accessToken )
                    loggedIn = true
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
                    localStorage.setItem( "gg_token", res.accessToken )
                    loggedIn = true
                }
            })
    }

    const logout = () => {
        loggedIn = false
        localStorage.removeItem("gg_token")
    }

    return { isAuthenticated, logout, login, register }
}

export default useSimpleAuth
