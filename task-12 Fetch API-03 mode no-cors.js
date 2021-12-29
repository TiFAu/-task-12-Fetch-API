/*no-cors
В таком режиме при кросс-доменном запросе исключение не будет сгенерировано, но ответ будет пустым
*/
var request = new Request( 
    'https://avatars2.githubusercontent.com/u/46?v=4',
    {
        mode: 'no-cors'
    }
)

fetch ( request )
    .then ( response => response.blob()
        .then ( response => console.log ( response ) )
    )
/*
На такой запрос ответ будет: Blob(0) { size: 0, type: "" }

Если тот же запрос сделать без mode: 'no-cors'

то ответ будет: Blob(35635) { size: 35635, type: "image/jpeg" }
*/
