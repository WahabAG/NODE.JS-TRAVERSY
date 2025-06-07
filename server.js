import http from 'http';


const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.writeHead(200, {'Content-Type' :'text/html'});
        
        res.end('<h1>This is The HOME PAGE</h1>');
    }else if (req.url === '/about'){
        res.writeHead(200, {'Content-Type' :'text/html'});
    
        res.end('<h1>This is THE ABOUT PAGE</h1>');
    }else{
        res.writeHead(404, {'Content-Type' :'text/html'});
        
        res.end('<h1>PAGE NOT FOUND</h1>');
    }
    


});

server.listen(PORT , () => {
    console.log(`server is listening on port ${PORT}`)
}); 
