var picture = document.createElement ( 'img' )
document.body.appendChild ( picture )
fetch ( 'https://avatars2.githubusercontent.com/u/46?v=4' )
    .then ( response => {
        response.blob().then ( response => {
    	    urlObject = URL.createObjectURL( response)
    	    picture.src = urlObject
        })
    })