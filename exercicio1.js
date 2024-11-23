import express from "express";

const contatos = [
    {
        "email": "seuemail@exemplo.com",
        "telefone": "(11) 1234-5678"}
];
const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/sobre", (req, res) => {
    res.status(200).send("Bem-vindo ao meu servidor Express! Aqui você encontrará informações sobre o projeto.");
});

app.get("/contatos", (req, res) => {
    res.status(200).json(contatos);
});