"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoModel = void 0;
class PedidoModel {
    constructor(descricao, entregue = false) {
        this.descricao = descricao;
        this.entregue = entregue;
    }
    marcarComoEntregue() {
        this.entregue = true;
    }
    estarEntregue() {
        return this.entregue;
    }
}
exports.PedidoModel = PedidoModel;
