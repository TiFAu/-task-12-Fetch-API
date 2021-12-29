const request = new Request ( 
    'https://api.github.com/users ',
    {
        mode: 'cors', 
 
    }
)

fetch( request )
    .then ( response => {
        console.log ( response )
        response.json()
            .then ( x => console.log ( x ) )
    })