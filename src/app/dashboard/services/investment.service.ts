import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InvestmentService {
  constructor() {}

  simularInvestimento(payload: any): Observable<any> {
    const mockResponse = {
      valorFinal: 11200,
      rentabilidade: 0.12,
      detalhes: 'Simulação baseada em CDB com taxa de 12% ao ano.',
    };
    return of(mockResponse);
  }
}
