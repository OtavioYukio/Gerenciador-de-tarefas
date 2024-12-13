import UserService from "../services/userService";
class UserController {
    async createUser(req:any, res:any) {
        console.log("Chegou aqui")
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
}

export default new UserController