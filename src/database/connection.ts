import postgres from "postgres";

export const sql = postgres({
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "23242908",
    database: "gerenciadortarefas"
})