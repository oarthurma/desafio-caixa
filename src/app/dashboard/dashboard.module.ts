import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // <--- NOVO: Importante para o loading

// Roteamento
import { DashboardRoutingModule } from './dashboard-routing.module';

// Componentes (Todos Clássicos agora)
import { DashboardComponent } from './dashboard.component';
import { RiskProfileComponent } from './risk-profile/risk-profile.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    RiskProfileComponent,
    ProductListComponent, // <--- Agora ele mora aqui, junto com os outros
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,

    // Material Modules (Disponíveis para TODOS os componentes acima)
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatProgressSpinnerModule, // <--- Disponibiliza o <mat-spinner>
  ],
})
export class DashboardModule {}
