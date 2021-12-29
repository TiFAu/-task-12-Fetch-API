/*cors
Разрешает кросс-доменные запросы ( :warning: если домен, куда направляется запрос, поддерживает CORS )


Например, запрос:
*/
var request = new Request( 
    'http://bm.img.com.ua/img/prikol/images/large/0/0/307600.jpg',
    {
        mode: 'cors'
    }
)
fetch ( request )
    .then ( response => {
        console.log ( response )
    })
/* приведет к генерации исключения:

Failed to load http://bm.img.com.ua/img/prikol/images/large/0/0/307600.jpg: 
No 'Access-Control-Allow-Origin' header is present on the requested resource
Origin 'null' is therefore not allowed access
If an opaque response serves your needs, 
set the request's mode to 'no-cors' to fetch the resource with CORS disabled
:no_entry: и соответствующему "провалу" запроса:

Uncaught (in promise) TypeError: Failed to fetch
Это происходит потому, что в режиме cors требуется, чтобы сервер запрошенного
 ресурса вернул заголовок Access-Control-Allow-Origin со значением, 
 совпадающим со значением Origin запроса ( а заголовок Origin нельзя подделать,
  он устанавливается браузером при отправке запроса на сервер )

Если сервер запрошенного ресурса вернет заголовок 
Access-Control-Allow-Origin со значением *, то запрос будет выполнен нормально
*/