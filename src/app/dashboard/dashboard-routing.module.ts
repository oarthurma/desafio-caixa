import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component'; // Importa o componente

// Define a rota padrão para este módulo
const routes: Routes = [
  {
    path: '', // O path e '' (vazio) pois o /dashboard já foi definido no AppRoutingModule
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
