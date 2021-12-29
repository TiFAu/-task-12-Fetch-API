var request = new Request ( 
    'https://httpbin.org/post',
    {
        method: 'POST', 
        mode: 'cors', 
        redirect: 'follow',
        headers: new Headers({
            'Content-Type': 'text/plain'
        }),
        body: "Hello, students!"
    }
)

fetch( request )
    .then ( response => {
        console.log ( response )
        response.json()
            .then ( x => console.log ( x ) )
    })