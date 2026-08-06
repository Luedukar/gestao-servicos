import { User } from "@/models/user/user-model";

const authUrl = process.env.API_URL || 'http://localhost:3050/auth';

// Função para buscar os usuarios ativos
export async function getUsers(): Promise<User[]> {
  const response = await fetch(`${authUrl}/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Aguarda uma resposta do backend
  const data = await response.json();

  // Se a resposta for !ok exibe o erro
  if (!response.ok) {
    throw new Error('Não foi possivel verificar os usuarios');
  }

  return data.mensagem;
}
