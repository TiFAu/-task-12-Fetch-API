var request = new Request( 
    'https://avatars2.githubusercontent.com/u/46?v=4',
    {
        mode: 'same-origin'
    }
)
fetch ( request )
    .then ( response => console.log ( response ) )
/*
приведет к генерации следующего исключения:

Fetch API cannot load https://avatars2.githubusercontent.com/u/46?v=4
Request mode is "same-origin" 
but the URL's origin is not same as the request origin null
Режим запроса same-origin ( одного происхождения ), а домен, которого сделан запрос ( null ) не совпадает с доменом, на который был отправлен запрос

в результате чего промис завершится неудачей:

Promise {<rejected>: TypeError: Failed to fetch
*/