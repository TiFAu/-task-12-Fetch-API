var picture = document.createElement ( 'img' )
document.body.appendChild ( picture )

fetch ( 'https://avatars2.githubusercontent.com/u/46?v=4' )
   .then ( response => {
      response.arrayBuffer()
         .then ( response => {
            var pixels = new Uint8Array( response )
    	    urlObject = URL.createObjectURL( new Blob ( [ response ] ))
    	    picture.src = urlObject
      })
   })