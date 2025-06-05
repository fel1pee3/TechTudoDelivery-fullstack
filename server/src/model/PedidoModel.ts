export class PedidoModel {
    
    constructor(
        public descricao: string,
        public entregue: boolean = false
    ) {}

    marcarComoEntregue() {
        this.entregue = true;
    }

    estarEntregue(): boolean {
        return this.entregue;
    }
}