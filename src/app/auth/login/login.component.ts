import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importar o Router
import { AuthService } from '../auth.service'; // Importar nosso serviço

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false,
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; // A propriedade que vai guardar o formulário
  hidePassword = true; // Variável para controlar a visibilidade da senha

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {} //um "ajudante" para criar formulários

  // ngOnInit - onde vamos inicializar o formulário
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      // Definimos os controles: 'email' e 'senha'
      // O primeiro item do array é o valor inicial (vazio)
      // O segundo item (ou array) são os validadores
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // Método de conveniência para o template
  get email() {
    return this.loginForm.get('email');
  }

  get senha() {
    return this.loginForm.get('senha');
  }

  // O método que será chamado no (ngSubmit) do formulário
  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    // Chamar o serviço de login
    this.authService.login(this.loginForm.value).subscribe({
      // Callback de SUCESSO
      next: (response: any) => {
        console.log('Login bem-sucedido!', response);
        // Redirecionar para o dashboard
        this.router.navigate(['/dashboard']);
      },
      // Callback de ERRO
      error: (err: any) => {
        console.error('Erro no login:', err);
      },
    });
  }
}
