const http = require('http')
const url = require('url')

let numOfFlowers = 0;

const scriptJs = "document.querySelector('#buyBtn').addEventListener('click', async () => { const response = await fetch(`http://localhost:8080?buyCount=${document.querySelector('#buyCount').value}`, {headers: {'Accept': 'application/json','Content-Type': 'application/json'}, method: 'PATCH'}); const data = await response.body.getReader();const data2 = await data.read(); const string = new TextDecoder('utf-8').decode(data2.value);if(window.confirm(string)){location.reload()}});"
    



http.createServer((req, res) => {

    const queryObject = url.parse(req.url, true).query;
    if (req.method === "GET") {
        console.log(req.url)
        if(req.url === "/js/scripts.js"){
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(scriptJs);
            res.end();
        }else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(
                `<html lang="en">
                    <head>
                        <meta charset="utf-8">
                        <title>Sklep z kwiatami</title>
                        <meta name="description" content="Sklep z kwiatami">
                        <link rel="stylesheet" href="css/styles.css">
                    </head>
                    <body>
                    <h2>Super Tulipany idealne dla babci i mamy!</h2>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/51yuvk-69aL._AC_.jpg" />
                        <div>Dostępne : ${numOfFlowers}</div>
                        <span>Wybierz ilosc</span>
                        <input id="buyCount"></input>
                        <button id="buyBtn">Kup Teraz! </button>
                        <script src="js/scripts.js"></script>
                    </body>
                    </html>`);
            res.end();
        }
        
    } else if (req.method === "POST") {
        numOfFlowers += parseInt(queryObject.flowers)
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(`Dodales ${queryObject.flowers}, dzieki byku!`);
        res.end();
    } else if (req.method === "DELETE") {
        numOfFlowers -= parseInt(queryObject.flowers)
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(`O nol ${queryObject.flowers} kwiatow usuniete, w tym roku ogrod będzie smutny.`);
        res.end();
    }else if (req.method === "PATCH") {
        if(queryObject.buyCount <= numOfFlowers){
            numOfFlowers -= queryObject.buyCount
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(`Kupiles  ${queryObject.buyCount} kwiatow, Dziekujemy zapraszamy ponownie`);
            res.end();
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write(`Nie ma tylu, sorry`);
            res.end();
        }
    }

}).listen(8080);