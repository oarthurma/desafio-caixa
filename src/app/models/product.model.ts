// O objetivo deste arquivo é definir um "contrato".
// Qualquer coisa que se chame "Product" no nosso app DEVE ter esses campos.

export interface Product {
  id: number;
  nome: string;
  tipo: string; // Ex: 'CDB', 'Fundo', etc.
  rentabilidade: number; // Ex: 0.13 (que será 13%)
  risco: 'Baixo' | 'Médio' | 'Alto'; // Limitamos os valores possíveis para evitar erros de digitação
}
