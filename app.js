import http, { createServer } from 'http';
import { logger } from './middleware/loggerMiddleware.js';
import { jsonMiddleware } from './middleware/jsonMiddleware.js';
import { getUsers } from './handlers/userHandler.js';
import { getUserById } from './handlers/userIdHandler.js';
import { notFound } from './handlers/errorHandler.js';

const PORT = process.env.PORT;



const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () =>{
            if (req.url === '/api/users' && req.method === 'GET'){
                getUsers(req, res);
            }else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
                getUserById( req, res);
            }else {
                notFound(req, res);

            }
        });
    });

});

server.listen(PORT, () => {
    console.log(`Server in listening on ${PORT}`);
});