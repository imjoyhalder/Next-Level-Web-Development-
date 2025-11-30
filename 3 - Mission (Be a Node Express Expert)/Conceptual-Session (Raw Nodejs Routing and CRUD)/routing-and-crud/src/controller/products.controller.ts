import { IncomingMessage, ServerResponse } from "http";
import { readProducts, writeProduct } from "../services/products.service";
import { IProduct } from "../types/Iporduct.interface";
import { parseBody } from "../utility/parseBody";

export const productController = async (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;

    const urlPart = url?.split('/')
    const id = urlPart && urlPart[1] === 'products' ? Number(urlPart[2]) : null
    console.log(id);

    if (method === "GET" && url === '/products') {
        const products = readProducts()
        res.writeHead(200, { 'content-type': "application/json" })
        res.end(JSON.stringify({ success: true, path: url, data: products }))
        return;
    }
    else if (method === 'GET' && id !== null) {
        const products = readProducts()
        const product = products.find((p: IProduct) => p.id === id)

        res.writeHead(200, { 'content-type': "application/json" })
        res.end(JSON.stringify({ success: true, data: product }))
        return;
    }

    else if (method === 'POST' && url === '/products') {
        const body = await parseBody(req)
        const products = readProducts();

        const newProduct = {
            id: Date.now(),
            ...body
        }

        products.push(newProduct)
        writeProduct(products)
        console.log(products);

        res.writeHead(200, { 'content-type': "application/json" })
        res.end(JSON.stringify({ success: true, data: newProduct }))
        return;
    }

    else if (method === "PUT" && id != null) {
        const body = await parseBody(req)
        const products = readProducts();

        const index = products.findIndex((p: IProduct) => p.id == id)
        if (index < 0) {
            res.writeHead(201, { "content-type": 'application/json' })
            res.end(
                JSON.stringify({
                    message: 'Products not found'
                })
            )
            return;
        }
        products[index] = { id: products[index].id, ...body }
        writeProduct(products)
        res.writeHead(200, { 'content-type': "application/json" })
        res.end(JSON.stringify({ message: 'Product updated successfully', data: products[index]}))
        return;
    }

}