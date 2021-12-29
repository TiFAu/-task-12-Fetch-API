( async () => {
        const response = await fetch ( 'https://httpbin.org/post', {
                method: 'POST',
                headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify ( { title: "show", text: 'must go on' } )
        })
        const content = await response.json()

        console.log( content )
})()