import { Router } from "express";
import { PedidoController } from "../controller/PedidoController";

export const configurePedidoRoutes = (controller: PedidoController): Router => {
    const router = Router();

    router.post("/", (req, res) => {
        const { descricao } = req.body;
        controller.cadastrarPedido(descricao);
        res.status(201).send({ mensagem: "Pedido cadastrado!" });
    });

    router.get("/", (_, res) => {
        res.json(controller.listarPedidos());
    });

    router.put("/:numero/entregar", (req, res) => {
        const numero = parseInt(req.params.numero);
        const sucesso = controller.marcarComoEntregue(numero);
        res.send({ sucesso });
    });

    router.delete("/entregues", (_, res) => {
        controller.removerEntregues();
        res.send({ mensagem: "Pedidos entregues removidos." });
    });

    return router;
};