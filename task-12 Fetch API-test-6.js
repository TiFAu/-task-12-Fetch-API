( async () => {
        const response = await fetch ( 'https://httpbin.org/post', {
                method: 'POST',
                headers: {
                        'Accept': 'text/plain',
                        'Content-Type': 'text/plain'
                },
                body: "Show must go on"
        })
        const content = await response.json()

        console.log( content.data )
})()