import { PedidoService } from "../service/PedidoService";

export class PedidoController {
    constructor(private service: PedidoService) {}

    cadastrarPedido(descricao: string): void {
        this.service.cadastrarPedido(descricao);
    }

    listarPedidos(): string[] {
        return this.service.listarPedidos();
    }

    marcarComoEntregue(numero: number): boolean {
        return this.service.marcarComoEntregue(numero);
    }

    removerEntregues(): void {
        this.service.removerEntregues();
    }
}