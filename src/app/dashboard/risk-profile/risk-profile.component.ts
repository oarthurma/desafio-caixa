import { Component, OnInit } from '@angular/core'; // Acrescentamos o OnInit
import { InvestmentService } from '../services/investment.service'; // Importamos o Serviço
import { RiskProfile } from '../../models/profile.model'; // Importando o Contrato

@Component({
  selector: 'app-risk-profile',
  templateUrl: './risk-profile.component.html',
  styleUrl: './risk-profile.component.scss',
  standalone: false,
})
export class RiskProfileComponent implements OnInit {
  // Implemanta a interface

  riskProfile: RiskProfile | undefined; // Propriedade para guardar o dado
  // Construtor para injeção de dependência
  constructor(private service: InvestmentService) {}

  // O método (função de um objeto) ngOnInit para buscar os dados
  ngOnInit(): void {
    this.service.getPerfilRisco(1).subscribe({
      next: (dados) => {
        this.riskProfile = dados;
        console.log('Perfil carregado:', this.riskProfile);
      },
      error: (erro) => {
        console.error('Erro:', erro);
      },
    });
  }
}
