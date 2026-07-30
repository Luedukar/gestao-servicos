const API_URL = 'http://localhost:3050/auth';

// Função para verificar usuarios
export async function login() {
  const response = await fetch(`${API_URL}/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Aguarda uma resposta do backend
  const data = await response.json();

  // Se a resposta for !ok exibe o erro
  if (!response.ok) {
    throw new Error('Não foi possivel rerificar os usuarios');
  }

  return data;
}
