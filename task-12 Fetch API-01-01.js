let request = new Request ( "https://api.github.com/users", {
    credentials: "include",
    mode: "same-origin",
    headers: new Headers ({
        "Content-Type" : "application/json"
    })
} )

// request.headers.get ( "Content-Type" )
console.log (request)
console.log (request.headers.get ( "Content-Type" ))