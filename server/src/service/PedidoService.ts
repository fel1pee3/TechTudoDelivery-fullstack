import { PedidoModel } from "../model/PedidoModel";

export class PedidoService {
    private pedidos: PedidoModel[] = [];

    cadastrarPedido(descricao: string): void {
        this.pedidos.push(new PedidoModel(descricao));
    }

    listarPedidos(): string[] {
        return this.pedidos.map((pedido, index) => {
            const status = pedido.estarEntregue() ? "Entregue" : "Pendente";
            return `${index + 1}. ${pedido.descricao} - ${status}`;
        });
    }

    marcarComoEntregue(numero: number): boolean {
        if (numero > 0 && numero <= this.pedidos.length) {
            this.pedidos[numero - 1].marcarComoEntregue();
            return true;
        }
        return false;
    }

    removerEntregues(): void {
        this.pedidos = this.pedidos.filter(p => !p.estarEntregue());
    }
}