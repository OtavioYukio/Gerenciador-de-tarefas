import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
class UserService {
    public async createUser(email:string, nome:string, senha:string) {
        const uValidation = await prisma.usuarios.findUnique({
            where: {
                email: email,
                nome: nome
            }
        });

        if (uValidation) {
            throw new Error("Email ou nome já utilizados");
        } else {
            const newUser = await prisma.usuarios.create({
                data: {
                    email,
                    nome,
                    senha
                }
            });
            return newUser;
        }
    }

    public async getUser(nome:string, senha:string) {
        const uValidation = await prisma.usuarios.findFirst({
            where: {
                nome:nome,
                senha:senha
            }
        })

        return uValidation ? true: false
    }
}

export default new UserService;