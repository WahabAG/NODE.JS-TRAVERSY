import http from 'http';

const port = 2000

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
        res.write('<h1>This is my first Server</h1>');
        res.end();

});

server.listen(port , () => {
    console.log(`server is listening on port ${port}`)
}); 
