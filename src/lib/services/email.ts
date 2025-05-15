import axios from "axios";

// Configura a instância do Axios para comunicação com a API SMTP2GO
const api = axios.create({
  baseURL: import.meta.env.VITE_SMTP2GO_API_URL || 'https://api.smtp2go.com/v3',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Interceptador para lidar com erros de resposta
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Log detalhado do erro
    console.error('API Error:', {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data
    });
    return Promise.reject(error);
  }
);

export default api;