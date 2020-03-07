const http = require('http')
const url = require('url')

let numofCars = 0

http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    if (req.method === "GET") {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(
                `<html lang="eng">
                <head>
                    <title>Sprzedaz samochodow</title>

                </head>
                <body>
                <h1>Nowe samochody w niskich cenach!</h1>
                <div>Dostepne : ${numofCars}</div>
                <script src="js/scripts.js"></script>
                </body>

                </html>`);
             res.end();
    } else if(req.method === "POST") {
        numofCars += parseInt(queryObject.cars)
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(`Dodales ${queryObject.cars}, bardzo dziekujemy!`);
        res.end();
    } else if(req.method === "DELETE") {
        numofCars -= parseInt(queryObject.cars)
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(`Mamy o ${queryObject.cars} mniej, szkoda`);
        res.end();
    }
        
    



}
).listen(8050);