import { PedidoController } from "../controller/PedidoController";
import readline from "readline";

export class PedidoView {
    private controller = new PedidoController();
    private rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    exibirMenu(): void {
        const menu = () => {
            console.log("\n=== TechTudo Delivery ===");
            console.log("1. Cadastrar Pedido");
            console.log("2. Listar Pedidos");
            console.log("3. Marcar Pedido como Entregue");
            console.log("4. Remover Pedidos Entregues");
            console.log("5. Sair");

            this.rl.question("Escolha uma opção: ", (opcao) => {
                switch (opcao) {
                    case "1":
                        this.rl.question("Digite a descrição do pedido: ", (desc) => {
                        this.controller.cadastrarPedido(desc);
                        menu();
                        });
                        break;
                    case "2":
                        const pedidos = this.controller.listarPedidos();
                        if (pedidos.length === 0) {
                            console.log("Nenhum pedido cadastrado.");
                        } else {
                            pedidos.forEach(p => console.log(p));
                        }
                        menu();
                        break;
                    case "3":
                        this.rl.question("Digite o número do pedido a entregar: ", (num) => {
                        const sucesso = this.controller.marcarComoEntregue(Number(num));
                        if (sucesso) {
                            console.log("Pedido marcado como entregue!");
                        } else {
                            console.log("Número inválido.");
                        }
                        menu();
                        });
                        break;
                    case "4":
                        this.controller.removerEntregues();
                        console.log("Pedidos entregues removidos.");
                        menu();
                        break;
                    case "5":
                        console.log("Saindo...");
                        this.rl.close();
                        break;
                    default:
                        console.log("Opção inválida.");
                        menu();
                }
            });
        };

        menu();
    }
}
