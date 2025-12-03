import { Router } from 'express';
import { pool } from "../../config/db"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from "../../config"

const loginUser = async(email: string, password: string)=>{
    const result = await pool.query(`SELECT * FROM users WHERE email=$1`, [email])
    const user = result.rows[0]
    if(result.rows[0]===0){
        return null; 
    }
    const match = await bcrypt.compare(password, user.password )
    if(!match){
        return false
    }

    const payload = {
        name: user.name, 
        email: user.email, 
    }

    const token = jwt.sign(payload, config.jwtSecret!, {
        expiresIn:'1d'
    })

    console.log(token);
    return {token, user}
}

export const authServices = {
    loginUser, 
}