fetch ( 'https://avatars2.githubusercontent.com/u/46?v=4' )
    .then ( response => {
        response.arrayBuffer().then ( response => {
            console.log ( response )
            console.log ( new Int8Array( response ) )
            console.log ( new Uint8Array( response ) )
        })
    })