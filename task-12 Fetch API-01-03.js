let request = new Request ( "https://api.github.com/users", {
    credentials: "include",
    mode: "same-origin",
    headers: {
        "Content-Type" : "application/json"
    }
} )

console.log (request)
console.log (request.headers.get ( "Content-Type" ))