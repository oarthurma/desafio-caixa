import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 'of' para criar dados falso
import { delay, tap } from 'rxjs/operators'; // 'delay' para simular tempo de rede

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // Método de Login (MOCK / SIMULADO)

  login(credentials: { email: string; senha: string }): Observable<any> {
    console.log('Simulado login para:', credentials.email);

    const mockResponse = {
      token: 'eyJhbGciOiJIUzI1NilsInR5cCl6lkpXVCJ9...', // Token JWT fake
      clientId: 123, // ID do cliente
    };

    // Retornamos um Observable criado com 'of' (cria um fluxo de dados imediado)
    return of(mockResponse).pipe(
      delay(1000), // Finge que a internet demorou 1s

      tap((response) => {
        localStorage.setItem('authToken', response.token);
        localStorage.setItem('clientId', response.clientId.toString());
        console.log('Login realizado com sucesso! Token salvo');
      })
    );
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  logout(): void {
    localStorage.clear();
  }
}
