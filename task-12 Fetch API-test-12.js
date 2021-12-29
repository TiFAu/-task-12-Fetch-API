var picture = document.createElement ( 'img' )
document.body.appendChild ( picture )

fetch ( 'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg' )
        .then ( response => {
                response.blob().then ( response => {
    			picture.src = URL.createObjectURL( response)
                        picture.width = "300"
                })
        })