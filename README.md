# 🏦 Painel de Investimentos - CAIXA (Desafio Frontend)

![Angular](https://img.shields.io/badge/Angular-19-dd0031?style=for-the-badge&logo=angular)
![Material Design](https://img.shields.io/badge/Material-Design-blue?style=for-the-badge&logo=materialdesign)
![Status](https://img.shields.io/badge/Status-MVP%20Concluído-success?style=for-the-badge)

> Aplicação web desenvolvida para análise de perfil de investidor e simulação de produtos financeiros, focada em experiência do usuário e arquitetura limpa.

---

## 📋 Sobre o Projeto

Este projeto é uma solução para o **Desafio Técnico de Frontend**, simulando o ambiente digital da **CAIXA**. O objetivo é oferecer uma interface intuitiva onde o cliente possa visualizar seu perfil de risco, receber recomendações de produtos (CDB, Fundos, Tesouro) e simular rendimentos em tempo real.

### 🎯 Objetivos do MVP (Minimum Viable Product)

Adotamos uma estratégia de **MVP Enxuto** para esta entrega:

- **Foco:** Funcionalidade crítica e fluxo do usuário (Login -> Dashboard -> Simulação).
- **Arquitetura:** Prioridade para organização de código, tipagem forte e comunicação entre componentes.
- **Decisão de Design:** Substituição temporária de gráficos complexos por listas informativas para garantir entrega rápida e robusta.

---

## ✨ Funcionalidades Implementadas

### 🔐 Autenticação

- **Login Seguro:** Interface de login com validação de formulário.
- **Token Management:** Simulação de autenticação via JWT (armazenamento local).
- **Guarda de Rotas:** Redirecionamento automático e proteção de rotas.

### 📊 Dashboard Interativo

- **Perfil de Risco:** Carregamento dinâmico do perfil do cliente (Conservador, Moderado, Agressivo) via Service Mock.
- **Lista de Oportunidades:** Exibição de produtos recomendados (Cards) com dados de rentabilidade e risco.
- **Loading States:** Feedback visual (spinners) durante as chamadas assíncronas.

### 💰 Simulador Inteligente

- **Cálculo em Tempo Real:** Simulação de investimentos baseada em aporte, prazo e tipo.
- **Integração Fluida:** O usuário pode clicar em um produto da lista e o simulador é preenchido automaticamente (Comunicação Filho -> Pai via `@Output`).
- **Feedback Visual:** Exibição clara do valor final bruto e rentabilidade estimada.

---

## 🛠️ Arquitetura e Tecnologias

O projeto foi construído utilizando **Angular 19** no padrão **NgModule (Clássico/Corporativo)**, garantindo estrutura modular e escalável.

- **Core:** Angular 19, TypeScript.
- **UI/UX:** Angular Material, SCSS (Sass), Grid Layout Responsivo.
- **Gerenciamento de Estado/Dados:** RxJS (Observables, `of`, `delay` para simulação de latência de rede).
- **Formulários:** Reactive Forms (validações complexas e dinâmicas).
- **Mock Server:** Serviços frontend simulando respostas de API conforme especificações do desafio.

### Estrutura de Pastas

```text
src/app/dashboard/
├── components/
│   ├── product-list/    # Lista de recomendações (Smart Component)
│   ├── risk-profile/    # Exibição de perfil
├── services/            # Lógica de negócio e chamadas de API (Mock)
├── models/              # Interfaces (Tipagem forte)
└── dashboard.module.ts  # Centralizador do módulo (NgModules)
```

---

## 🚀 Como Rodar o Projeto

Certifique-se de ter o **Node.js** e o **Angular CLI** instalados.

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/desafio-caixa.git
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento:**

   ```bash
   ng serve
   ```

4. **Acesse no navegador:**
   Abra `http://localhost:4200/`.

**Credenciais para Teste:**

- **Email:** `cliente@exemplo.com`
- **Senha:** `123456`

---

## 🔮 Próximos Passos (Roadmap)

Para evoluir este MVP para uma versão 1.0 completa, o roadmap técnico inclui:

1.  [ ] **Visualização de Dados:** Implementação de gráficos (`ngx-charts` ou `Chart.js`) para evolução patrimonial.
2.  [ ] **Histórico:** Implementação da tabela de histórico de investimentos (`GET /investimentos`).
3.  [ ] **Testes Unitários:** Cobertura de testes com Jasmine/Karma focando em Services e Validadores (Meta: 80%).
4.  [ ] **Acessibilidade:** Melhorias em etiquetas ARIA e navegação por teclado.

---

<div align="center">
  Desenvolvido com 💙 e Angular
</div>
