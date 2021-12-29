var request = new Request( 
    'https://httpbin.org/get',
    {
        mode: 'cors'
    }
)
fetch ( request )
    .then ( response => response.text()
        .then ( response => console.log ( response ) )
    )
/*

Когда объект запроса создается с помощью конструктора Request, значение свойства mode для этого запроса устанавливается в cors

var request = new Request (
   'http://bm.img.com.ua/img/prikol/images/large/0/0/307600.jpg'
)
console.log ( request.mode ) // cors
В противном случае в качестве режима обычно используется no-cors
( например, когда запрос инициируется из разметки, и атрибут crossorigin отсутствует )
для элементов <link>, <script>, <img>, <audio>, <video>, <object>, <embed> или <iframe> запрос выполняется в режиме no-cors
*/