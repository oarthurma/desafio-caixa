import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Rota adicionada:
  {
    path: 'login', // Quando a URL for /login... (Define o prefixo da URL)
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
