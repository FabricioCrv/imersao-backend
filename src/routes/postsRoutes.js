import express from "express"
import { listarPosts, postarNovoPost,uploadImagem } from "../controllers/postsController.js";
import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb){
        cb(null, file.originalname);
    }
})

const upload = multer({dest: "./uploads", storage})

const routes = (app) => {
    // Permite que o servidor interprete requisições com corpo no formato JSON
    app.use(express.json());
    // rota para buscar um post
    app.get("/posts", listarPosts);
    // rota para criar um novo post
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem)
}

export default routes;