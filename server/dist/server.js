"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const PedidoController_1 = require("./controller/PedidoController");
const app = (0, express_1.default)();
const controller = new PedidoController_1.PedidoController();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
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
