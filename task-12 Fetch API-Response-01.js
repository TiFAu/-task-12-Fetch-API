fetch ( 'https://api.github.com/users/5', {
    method: "HEAD"
}).then ( response => response.headers.forEach (
    key => console.log ( key )
) )
