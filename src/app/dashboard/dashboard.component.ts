import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvestmentService } from './services/investment.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
// Implementando a interface OnInit
export class DashboardComponent implements OnInit {
  // Declarando a "caixa" que vai guardar nosso formulário
  simulatorForm: FormGroup = null!;

  resultadoSimulacao: any = null;

  // Injetando o "Construtor de Formulários" (FormBuilder)
  constructor(
    private fb: FormBuilder,
    private investmentService: InvestmentService
  ) {}

  // Inicializando o formulário no ngOnInit
  ngOnInit(): void {
    this.simulatorForm = this.fb.group({
      // Nossos 3 campos do HTML, com validação básica
      tipo: [null, [Validators.required]],
      valor: [null, [Validators.required, Validators.min(1)]],
      prazoMeses: [null, [Validators.required, Validators.min(1)]],
    });
  }

  // Criando o método que será chamado pelo botão "Simular"
  onSimular(): void {
    this.resultadoSimulacao = null;

    if (this.simulatorForm.valid) {
      console.log('Formulário Válido! Enviando para o serviço...');
      this.investmentService
        .simularInvestimento(this.simulatorForm.value)
        .subscribe({
          next: (resposta) => {
            console.log('Resposta da API (Mockada):', resposta);
            this.resultadoSimulacao = resposta;
          },
        });
    } else {
      console.log('Formulário Inválido');
    }
  }
}
