var response = new Response( '.....', {
	ok: false,
	status: 404,
	url: '/'
})

fetch( 'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg' )
        .then( resp => {
                console.log ( 'status: ', resp.status )
                resp.blob().then ( x => console.log ( 'result: ', x ) )
        })