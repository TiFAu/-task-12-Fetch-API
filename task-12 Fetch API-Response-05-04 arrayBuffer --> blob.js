fetch ( 'https://httpbin.org/get' )
    .then ( response => response.json()
        .then ( response => console.log ( response.headers ) )
    )