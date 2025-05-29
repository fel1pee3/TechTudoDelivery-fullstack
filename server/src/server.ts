import express from "express";
import cors from "cors";
import { PedidoController } from "./controller/PedidoController";

const app = express();
const controller = new PedidoController();

app.use(cors());
app.use(express.json());

// Rotas da API
app.post("/pedidos", (req, res) => {
    const { descricao } = req.body;
    controller.cadastrarPedido(descricao);
    res.status(201).send({ mensagem: "Pedido cadastrado!" });
});

app.get("/pedidos", (req, res) => {
    res.json(controller.listarPedidos());
});

app.put("/pedidos/:numero/entregar", (req, res) => {
    const numero = parseInt(req.params.numero);
    const sucesso = controller.marcarComoEntregue(numero);
    res.send({ sucesso });
});

app.delete("/pedidos/entregues", (req, res) => {
    controller.removerEntregues();
    res.send({ mensagem: "Pedidos entregues removidos." });
});

app.listen(5000, () => {
    console.log("Servidor rodando na porta 5000");
});
