import { IncomingMessage, ServerResponse } from "http";


export const productRoute = (req: IncomingMessage, res: ServerResponse)=>{
    console.log(req.url);
    console.log(req.method);

    const url = req.url; 
    const method = req.method

    if(method==='GET' && url==='/'){
        res.writeHead(200, {'content-type': 'application/json'})
        res.end(JSON.stringify({message:true , path: req.url}))
    }
    else{
        res.writeHead(200, {'content-type': 'application/json'})
        res.end(JSON.stringify({message: 'Route not found'}))
    }
}