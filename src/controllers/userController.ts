import { error } from "console";
import UserService from "../services/userService";
import { Request, Response } from 'express'
class UserController {
    async createUser(req: Request, res: Response) {
        try {
            const { email, nome, senha } = req.body;

            const newUser = await UserService.createUser(email, nome, senha);

            return res.status(201).json({
                message: "Usuario criado com sucesso",
                user: newUser
            })
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
    
    async getUser(req: Request, res: Response) {
        try {
            const { nome, senha } = req.body;

            const findUser = await UserService.getUser(nome, senha);

            if(findUser) {
                return res.status(200).json({message: "Usuario autenticado"})
            }
            else {
                return res.status(401).json({message: "Usuario ou senha incorretos"})
            }
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
    }
}

export default new UserController