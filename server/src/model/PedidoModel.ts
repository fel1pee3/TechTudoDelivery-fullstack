export class PedidoModel {

    public descricao: string;
    public entregue: boolean;

    constructor(descricao: string, entregue: boolean = false) {
        this.descricao = descricao;
        this.entregue = entregue;
    }

    marcarComoEntregue() {
        this.entregue = true;
    }

    estarEntregue(): boolean {
        return this.entregue;
    }
}
