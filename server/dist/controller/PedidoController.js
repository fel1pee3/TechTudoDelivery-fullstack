"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoController = void 0;
const PedidoModel_1 = require("../model/PedidoModel");
class PedidoController {
    constructor() {
        this.pedidos = [];
    }
    cadastrarPedido(descricao) {
        const novo = new PedidoModel_1.PedidoModel(descricao);
        this.pedidos.push(novo);
    }
    listarPedidos() {
        return this.pedidos.map((pedido, index) => {
            const status = pedido.estarEntregue() ? "Entregue" : "Pendente";
            return `${index + 1}. ${pedido.descricao} - ${status}`;
        });
    }
    marcarComoEntregue(numero) {
        if (numero > 0 && numero <= this.pedidos.length) {
            this.pedidos[numero - 1].marcarComoEntregue();
            return true;
        }
        return false;
    }
    removerEntregues() {
        this.pedidos = this.pedidos.filter(p => !p.estarEntregue());
    }
}
exports.PedidoController = PedidoController;
