import express from "express";

const usuarios = [
    {
        email: "email1@mail.com",
        senha: "1234",
    },
    {
        email: "email2@mail.com",
        senha: "1245",
    },
]

const server = express();

server.use(express.json());

server.post("/login", (req, res) => {
    const usuario = req.body;

    const usuarioEncontrado = usuarios.find((u) => u.email == usuario.email)
    
    if(usuarioEncontrado != null && usuario.senha == usuarioEncontrado.senha) {
        res.send("Ok, login aprovado")
    } else {
        res.status(401).send("Não autorizado");
    }    
});

server.listen(8080);