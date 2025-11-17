import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs'; // 1. Importar o 'tap'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // 2. Definir a URL base da nossa API (backend)
  // (Vamos criar uma URL 'mock' por enquanto)
  private API_URL = 'http://localhost:3000'; // (Simulação de backend)

  // 3. Injetar o HttpClient
  constructor(private http: HttpClient) {}

  /**
   * Método de Login
   * Envia email/senha para a API e espera um token de volta.
   */
  login(credentials: { email: string; senha: string }): Observable<any> {
    // 4. O corpo da requisição que a API espera [cite: 111]
    const body = {
      email: credentials.email,
      senha: credentials.senha,
    };

    // 5. Endpoint de login
    const loginUrl = `${this.API_URL}/autenticacao/login`;

    // 6. Faz a chamada POST e retorna o Observable
    return this.http.post<any>(loginUrl, body).pipe(
      // 7. 'tap' nos permite "espiar" a resposta sem interrompê-la
      tap((response) => {
        // 8. Se a API retornar um token, salvamos no localStorage
        if (response && response.token) {
          localStorage.setItem('authToken', response.token);
          localStorage.setItem('clientId', response.clienteld); // [cite: 120]
          console.log('Token salvo!', response.token);
        }
      })
    );
  }
}
