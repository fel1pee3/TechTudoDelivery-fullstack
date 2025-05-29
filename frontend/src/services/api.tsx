// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export async function listarPedidos(): Promise<string[]> {
  const res = await api.get('/pedidos');
  return res.data;
}

export async function cadastrarPedido(descricao: string): Promise<void> {
  await api.post('/pedidos', { descricao });
}

export async function entregarPedido(numero: number): Promise<void> {
  await api.put(`/pedidos/${numero}/entregar`);
}

export async function removerEntregues(): Promise<void> {
  await api.delete('/pedidos/entregues');
}
