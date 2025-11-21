import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvestmentService } from './services/investment.service';
// Precisamos importar o modelo para saber o que é 'Product'
import { Product } from '../models/product.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  standalone: false,
})
export class DashboardComponent implements OnInit {
  simulatorForm: FormGroup;
  resultadoSimulacao: any = null;

  constructor(
    private fb: FormBuilder,
    private investmentService: InvestmentService
  ) {
    this.simulatorForm = this.fb.group({
      tipo: ['', Validators.required],
      valor: [null, [Validators.required, Validators.min(100)]],
      prazoMeses: [null, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {}

  onSimular(): void {
    if (this.simulatorForm.valid) {
      this.investmentService
        .simularInvestimento(this.simulatorForm.value)
        .subscribe({
          next: (res) => {
            this.resultadoSimulacao = res;
          },
          error: (err) => console.error('Erro', err),
        });
    }
  }

  // <--- NOVO MÉTODO: Recebe o produto do filho
  onProductSelected(product: Product): void {
    // 1. Atualiza o formulário com o Tipo do produto clicado
    this.simulatorForm.patchValue({
      tipo: product.tipo,
    });

    // 2. (Opcional) Rola a tela suavemente para o topo (onde está o simulador)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
