
import http, { IncomingMessage, Server, ServerResponse } from 'http'
import path from 'path';
import config from './config';

const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    // console.log(`Server is running .......`);
    if (req.url == '/' && req.method == "GET") {
        res.writeHead(200, { 'content-type': 'application/json' })
        res.end(JSON.stringify({
            message: 'Hello from node js with TypeScript...',
            path: req.url
        }))
    }

    if (req.url == '/api' && req.method == "GET") {

        res.writeHead(200, { 'content-type': 'application/json' })
        res.end(JSON.stringify({
            message: 'Health status ok...',
            path: req.url
        }))
    }

    if (req.url == '/api/users' && req.method == "POST") {
        let body = ''

        req.on('data', (chunk) => {
            body += chunk
        })

        req.on('end', () => {
            try {
                const pareBody = JSON.parse(body);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                console.log(pareBody);
                res.end(JSON.stringify(pareBody))
            } catch (error:any) {
                console.log(error?.message);
            }
        })
    }

})

server.listen(config.port, () => {
    console.log(`Server is running on port: ${5000}`);
})
