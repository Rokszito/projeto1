import express from "express";


const posts = [
    {
        id: 1,
        descricao: "Gato fazendo ioga",
        imagem: "https://placecats.com/millie/300/150",
        autor: "Autor 1"
    },
    {
        id: 2,
        descricao: "Gato fazendo panqueca",
        imagem: "https://placecats.com/millie/300/150",
        autor: "Autor 2"
    },
    {
        id: 3,
        descricao: "Gato fazendo panqueca",
        imagem: "https://placecats.com/millie/300/150",
        autor: "Autor 3"
    }
];
const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostsPorID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}
app.get("/posts/:id", (req, res) => {
    const index = buscarPostsPorID(req.params.id)
    res.status(200).json(posts[index]);
});