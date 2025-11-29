
import http, { IncomingMessage, Server, ServerResponse } from 'http'
import path from 'path';
import config from './config';
import { RouteHandler, routes } from './helpers/RouteHandler';
import './routes'


const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    
    const method = req.method?.toUpperCase() || ''
    const path = req.url || '';

    const methodMap = routes.get(method)
    const handler: RouteHandler | undefined = methodMap?.get(path)

    if (handler) {
        handler(req, res)
    }
    else {
        res.writeHead(404, { 'content-type': 'application/json' })
        res.end(JSON.stringify({
            success: 'false',
            message: "Route not found!!!",
            path
        }))
    }



    // if (req.url == '/api' && req.method == "GET") {

    //     res.writeHead(200, { 'content-type': 'application/json' })
    //     res.end(JSON.stringify({
    //         message: 'Health status ok...',
    //         path: req.url
    //     }))
    // }

    // if (req.url == '/api/users' && req.method == "POST") {
    //     let body = ''

    //     req.on('data', (chunk) => {
    //         body += chunk
    //     })

    //     req.on('end', () => {
    //         try {
    //             const pareBody = JSON.parse(body);
    //             res.writeHead(200, { 'Content-Type': 'application/json' });
    //             console.log(pareBody);
    //             res.end(JSON.stringify(pareBody))
    //         } catch (error: any) {
    //             console.log(error?.message);
    //         }
    //     })
    // }

})

server.listen(config.port, () => {
    console.log(`Server is running on port: ${5000}`);
})
