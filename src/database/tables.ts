import { sql } from "./connection";


export class tables {
    constructor(){}

    public async userTable() {
        try {
            const table = await sql`
                CREATE TABLE IF NOT EXISTS usuarios(
                    id SERIAL PRIMARY KEY,
                    email VARCHAR(100) UNIQUE NOT NULL,
                    nome VARCHAR(100) UNIQUE NOT NULL,
                    senha VARCHAR(50) NOT NULL
                )
            `
            return table
        } catch(err) {
            console.log("Deu ruim", err)
        }
    }
}