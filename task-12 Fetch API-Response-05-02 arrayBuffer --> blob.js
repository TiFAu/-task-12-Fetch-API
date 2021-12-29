fetch ( 'https://avatars2.githubusercontent.com/u/46?v=4' )
   .then ( response => {
      response.arrayBuffer()
         .then ( response => {
            console.log ( new Blob ( [ response ] ) )
         })
   })