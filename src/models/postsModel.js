// Importa a função para conectar ao banco de dados, definida em dbConfig.js
import conectarAoBanco from "../config/dbConfig.js"

// Estabelece a conexão com o banco de dados usando a string de conexão obtida da variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

export async function getTodosPosts(){
    // Seleciona o banco de dados "imersao-backend"
    const db = conexao.db("imersao-backend")
    // Seleciona a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts")
    // Executa uma consulta para encontrar todos os documentos na coleção e retorna os resultados como um array
    return colecao.find().toArray()
}

export async function criarPost(novoPost){
    const db = conexao.db("imersao-backend")
    const colecao = db.collection("posts")
    return colecao.insertOne(novoPost)
}