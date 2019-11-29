let friends = []

export const useFriends = () => friends.slice()

export const getFriends = () => {
    return fetch("http://localhost:8088/users", {
        method: "GET",
        headers: {
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("gg_token")}`
        }
    })
        .then(_ => _.json())
        .then(users => {
            friends = users.splice(0)
        })
}