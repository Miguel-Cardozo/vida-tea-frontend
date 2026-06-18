const API_URL = "https://vida-tea-backend-production.up.railway.app";

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  const text = await response.text();

  let data;

  try {
    data = JSON.parse(text);
  } catch {
    console.log("Resposta recebida:", text);
    throw new Error(`API retornou algo inválido na rota ${endpoint}`);
  }

  if (!response.ok) {
    throw new Error(data.message || "Erro na requisição");
  }

  return data;
}