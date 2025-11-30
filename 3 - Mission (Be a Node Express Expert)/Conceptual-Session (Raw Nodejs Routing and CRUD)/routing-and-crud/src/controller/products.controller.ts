import { IncomingMessage, ServerResponse } from "http";
import { readProducts } from "../services/products.service";
import { IProduct } from "../types/Iporduct.interface";

export const productController = (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;

    const urlPart = url?.split('/')
    const id = urlPart && urlPart[1] === 'products' ? Number(urlPart[2]) : null
    console.log(id);

    if (method === "GET" && url === '/products') {
        const products = readProducts()
        res.writeHead(200, { 'content-type': "application/json" })
        res.end(JSON.stringify({ success: true, path: url, data: products }))
    }
    else if (method === 'GET' && id !== null) {
        const products = readProducts()
        const product = products.find((p: IProduct)=> p.id === id)
        res.writeHead(200, { 'content-type': "application/json" })
        res.end(JSON.stringify({ success: true, data: product }))
    }
}