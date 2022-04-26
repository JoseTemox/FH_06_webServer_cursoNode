const http = require('http');

http.createServer( (req, res) => {


    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.writeHead(200, { 'Content-Type': 'application/json' });

    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    // res.writeHead(200, { 'Content-Type': 'application/csv' });

    // const persona = {
    //     id: 1,
    //     nombre: 'Temox'
    // }


    // res.write('id, nombre\n');
    // res.write('1, Jose\n');
    // res.write('2, Mathias\n');
    // res.write('3, Yuni\n');
    // res.write(JSON.stringify(persona));



    res.write('Hello world');
    res.end();
})

.listen(8080);


console.log('Puerto',8080);