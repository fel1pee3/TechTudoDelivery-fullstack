import "./App.css";
import { useEffect, useState } from 'react';
import {
  listarPedidos,
  cadastrarPedido,
  entregarPedido,
  removerEntregues,
} from './services/api';

function App() {
  const [pedidos, setPedidos] = useState<string[]>([]);
  const [descricao, setDescricao] = useState('');

  const carregarPedidos = async () => {
    const lista = await listarPedidos();
    setPedidos(lista);
  };

  useEffect(() => {
    carregarPedidos();
  }, []);

  const handleCadastrar = async () => {
    if (descricao.trim()) {
      await cadastrarPedido(descricao);
      setDescricao('');
      carregarPedidos();
    }
  };

  const handleEntregar = async (numero: number) => {
    await entregarPedido(numero);
    carregarPedidos();
  };

  const handleRemoverEntregues = async () => {
    await removerEntregues();
    carregarPedidos();
  };

  return (
    <div className="container">
      <div className='boxContant'>
        <h1 className="title">TechTudo Delivery</h1>
        <div className="boxForm">
          <input
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            className="inputDescricao"
            placeholder="Descrição do pedido"
          />
          <button onClick={handleCadastrar} className="btnCad">
            Cadastrar
          </button>
        </div>
        <ul className="listPedidos">
          {pedidos.map((pedido, index) => (
            <li
              key={index}
              className="itenPedido"
            >
              <span>{pedido}</span>
              <button
                onClick={() => handleEntregar(index + 1)}
                className="btnEntregar"
              >
                Entregar
              </button>
            </li>
          ))}
        </ul>
        <button onClick={handleRemoverEntregues} className="removerEntregues">
          Remover Entregues
        </button>
      </div>
    </div>
  );
}

export default App;
