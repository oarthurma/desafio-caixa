import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // 1. Rota Padrão: Se a URL estiver vazia, direciona para o login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // 2. Rota de Login (Lazy Loading)
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

  // 3. Rota do Dashboard (Lazy Loading)
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },

  // Rota Coringa: Se houver qualquer coisa errada, volta pro login
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
