import { NextFunction, Request, Response } from "express";
import { tables } from "./database/tables";
import express from "express";
export const app = express();
import cors from 'cors';
import userController from "./controllers/userController";

class main {
    private _tables;
    private _userTable;

    constructor() {
        this._tables = new tables;
        this._userTable = this._tables.userTable;
    }

    public callMain() {
        return [this._userTable()]
    }
}

app.use(cors());
app.use(express.json())

app.use((req:Request, res:Response, next:NextFunction) => {
    // Configurar métodos permitidos, origens e contents
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credetials', 'true');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-custom-header, Access-Control-Allow-Headers, Accept, x-Requested-With, Access-Control-Request-Method, Access-Control-Request-Headers');

    // Exemplo: Adicionar um header customizado para o request
    req.headers['x-custom-header'] = 'CustomValue';

    // Exemplo: Validar se um header específico existe
    if (req.method === 'OPTIONS') {
        return res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    }

    // Chamando o próximo middleware ou rota
    next();
});



app.post("/cadastro", userController.createUser)
app.post("/login", userController.getUser)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000...");
})
const init = new main;
init.callMain()
