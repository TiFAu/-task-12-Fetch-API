const request = new Request ( 
    'https://api.github.com/users ',
    {
        mode: 'cors', 
 
    }
)

fetch( request )
    .then ( response => {
        response.json()
            .then ( x => 
              {
                for ( var i = 0; i < 10; i++ ){
                    const picture = document.createElement ( 'img' )
                    document.body.appendChild ( picture )
    	            picture.src = x[i].avatar_url
                }
              }
             )
            }
          )