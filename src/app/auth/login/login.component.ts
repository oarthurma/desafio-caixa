import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false,
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup; // A propriedade que vai guardar o formulário
  hidePassword = true; // Variável para controlar a visibilidade da senha
  constructor(private fb: FormBuilder) {} //um "ajudante" para criar formulários

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

  // O método que será chamado no (ngSubmit) do formulário
  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    // Por enquanto, apenas logamos os valores no console
    // A Próxima estapa será chamar um AuthService aqui
    console.log('Formulário enviado: ', this.loginForm.value);
  }

  // Método de conveniência para o template
  get email() {
    return this.loginForm.get('email');
  }

  get senha() {
    return this.loginForm.get('senha');
  }
}
