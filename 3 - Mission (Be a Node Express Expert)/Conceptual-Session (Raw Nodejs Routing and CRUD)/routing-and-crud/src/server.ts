import { createServer, Server } from "http";

const server: Server = createServer((req, res)=>{
    console.log(req);
})

server.listen(5000, ()=>{
    console.log("server is running on port 5000");
})