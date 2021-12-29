//document.cookie = "name=TiFAu;token=BWbKthduxeqJld8oA7D0Q%3D%3D"
// из консоли http://ptsv2.com/t/d8uw9-1614284335
fetch ( 'https://api.github.com/users?since=135' )
   .then ( response => response.json()
      .then ( response => {
          fetch ( 
              'http://ptsv2.com/t/d8uw9-1614284335/post',
              {
                 method: 'POST',
                 credentials: 'include',
                 headers: new Headers({
                   'Content-Type': 'application/json'
                 }),
                 body: JSON.stringify ( response[5] )
              }
    	  )
          .then ( response => console.log ( response ) )
      })
   )