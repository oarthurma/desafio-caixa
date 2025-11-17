import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms'; // Módulo de Formulários Reativos

import { LoginComponent } from './login/login.component';

import { MatCardModule } from '@angular/material/card'; // Cartão para agrupar
import { MatFormFieldModule } from '@angular/material/form-field'; // Contêiner do campo
import { MatInputModule } from '@angular/material/input'; // O campo de input
import { MatButtonModule } from '@angular/material/button'; // O botão
import { MatIconModule } from '@angular/material/icon'; // Ícone para ver/esconder senha

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule, // Roteamento deste módulo
    // Componentes do Angular Material
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class AuthModule {}
