import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators'; // Para simular o atraso da rede
import { RiskProfile } from '../../models/profile.model';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  constructor() {}

  // Simulação de investimento (Mock)
  simularInvestimento(payload: any): Observable<any> {
    const mockResponse = {
      valorFinal: 11200,
      rentabilidade: 0.12,
      detalhes: 'Simulação baseada em CDB com taxa de 12% ao ano.',
    };
    return of(mockResponse).pipe(delay(500)); // Pequeno delay aqui também para realismo
  }

  // Busca Perfil de Risco (Mock)
  getPerfilRisco(clientId: number): Observable<RiskProfile> {
    const mockPerfil: RiskProfile = {
      clientId: clientId,
      perfil: 'Moderado',
      descricao: 'Perfil equilibrado entre segurança e rentabilidade.',
      pontuacao: 65,
    };
    return of(mockPerfil).pipe(delay(1000));
  }

  // Busca Produtos Recomendados (Mock)
  getRecommendedProducts(perfil: string): Observable<Product[]> {
    const mockProducts: Product[] = [
      {
        id: 101,
        nome: 'CDB Caixa 2026',
        tipo: 'CDB',
        rentabilidade: 0.13,
        risco: 'Baixo',
      },
      {
        id: 102,
        nome: 'Fundo Agressivo XPTO',
        tipo: 'Fundo',
        rentabilidade: 0.18,
        risco: 'Alto',
      },
      {
        id: 103,
        nome: 'Tesouro Selic 2029',
        tipo: 'Tesouro',
        rentabilidade: 0.1,
        risco: 'Baixo',
      },
    ];

    // Retorna a lista após 1.5 seg para simular o backend processando
    return of(mockProducts).pipe(delay(1500));
  }
}
