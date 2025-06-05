import express from "express";
import cors from "cors";
import { PedidoService } from "./service/PedidoService";
import { PedidoController } from "./controller/PedidoController";
import { configurePedidoRoutes } from "./routes/PedidosRoutes";

const app = express();
const pedidoService = new PedidoService();
const controller = new PedidoController(pedidoService);

app.use(cors());
app.use(express.json());

app.use("/pedidos", configurePedidoRoutes(controller));

app.listen(5000, () => console.log("Servidor rodando na porta 5000"));