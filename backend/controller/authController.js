import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import userModel from "../model/userModel.js"

export const login = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await userModel.findOne({username})

        if(!user) return res.status(401).json({message:"Credenciais invalidas"})

        const valid = await bcrypt.compare(password, user.password)
            
        if(!valid) return res.status(401).json({message:"Senha Inválida"})

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1h"})
        res.json({token})

    } catch (error) {
        console.error(error)
     res.status(500).json({message:"Erro no servidor"})   
    }
}

export const cadastro = async (req, res) => {
    
    try {
        const { username, password, type } = req.body
        const existUser = await userModel.findOne({username})

        if(existUser) {
            return res.status(400).json({"message":"Usuário já está em uso"})
        }
        const newUser = await userModel.create({
            username,
            password,
            type
        })
        res.status(200).json(newUser)
    } catch(err) {
        console.error("Erro no servidor: ", err)
    }
}
