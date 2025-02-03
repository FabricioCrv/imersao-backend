// Importa o framework Express para criar a aplicação web
import express from 'express';
import routes from './src/routes/postsRoutes.js';


// Cria uma instância do aplicativo Express
const app = express();
routes(app);

// Inicia o servidor na porta 3000
app.listen(3000, () =>{
    console.log("Servidor aberto.");
});

