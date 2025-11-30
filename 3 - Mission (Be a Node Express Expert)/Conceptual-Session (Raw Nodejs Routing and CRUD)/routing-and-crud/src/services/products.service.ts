import fs from "fs"
import path from "path";

export const readProducts = ()=>{
    const filePath = path.join(process.cwd(),'./src/database/database.json')
    const data = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(data)
}