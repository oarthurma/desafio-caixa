import { Component, OnInit, Output, EventEmitter } from '@angular/core'; // <--- Adicione Output e EventEmitter
import { InvestmentService } from '../services/investment.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  isLoading: boolean = true;

  // 1. Cria o canal de comunicação com o PAI
  @Output() selectProduct = new EventEmitter<Product>();

  constructor(private investmentService: InvestmentService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.investmentService.getRecommendedProducts('Moderado').subscribe({
      next: (data) => {
        this.products = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erro ao carregar produtos', err);
        this.isLoading = false;
      },
    });
  }

  onSimulate(product: Product): void {
    console.log('Produto selecionado:', product.nome);
    // 2. Emite o evento para quem estiver ouvindo (o Dashboard)
    this.selectProduct.emit(product);
  }
}
