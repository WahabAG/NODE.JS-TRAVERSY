import http from 'http';
import fs from 'fs/promises';
import url from 'url';

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    try  {
        
        if (req.method === 'GET' ) {
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
        } else {
            throw new Error('method not allowed');
        }
    } catch (error) { res.writeHead(500, {'Content-Type' :'text/html'});
                    res.end('<h1> SERVER ERROR</h1>');
        
    } 


});

server.listen(PORT , () => {
    console.log(`server is listening on port ${PORT}`)
}); 
