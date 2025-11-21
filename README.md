# 🏦 Portal do Investidor - Desafio Frontend

🔗 Repositório completo no GitHub: [https://github.com/oarthurma/desafio-caixa](https://github.com/oarthurma/desafio-caixa)

> ⚠️ Este pacote contém apenas os arquivos essenciais (`src/`, `angular.json`, `package.json`, `tsconfig.json`) para respeitar o limite de 2MB exigido pelo sistema da CAIXA.

---

## 📋 Sobre o Projeto

Solução desenvolvida para o Desafio Técnico de Frontend da **CAIXA**, simulando o ambiente digital do **Portal do Investidor**. A aplicação permite que o cliente:

- Faça login com autenticação simulada
- Visualize seu perfil de risco (Conservador, Moderado, Agressivo)
- Veja produtos recomendados com base no perfil
- Simule investimentos com retorno estimado

---

### 🎯 Objetivos do MVP (Minimum Viable Product)

Adotamos uma estratégia de **MVP Enxuto** para esta entrega:

- **Foco:** Funcionalidade crítica e fluxo do usuário (Login -> Dashboard -> Simulação).
- **Arquitetura:** Prioridade para organização de código, tipagem forte e comunicação entre componentes.
- **Decisão de Design:** Substituição temporária de gráficos complexos por listas informativas para garantir entrega rápida e robusta.

---

## ⚙️ Decisões de Arquitetura & Design

- **NgModules**: Estrutura baseada em `AppModule` e `DashboardModule` para maior escalabilidade
- **Identidade Visual CAIXA**: Paleta institucional aplicada via SCSS
- **UX e Acessibilidade**:
  - Feedback visual com spinners
  - Formulários com validação reativa
  - Contraste de cores ajustado

---

## ✨ Funcionalidades Principais

### 🔐 Autenticação

- Login com validação de campos (`ReactiveForms`)
- Simulação de token JWT
- Proteção de rotas com `AuthGuard`

### 📊 Dashboard

- Lista de produtos recomendados com integração ao serviço
- Emissão de eventos com `@Output()` para simulação
- Exibição de perfil de risco com dados mockados

### 💰 Simulador de Investimentos

- Inputs: valor, prazo, tipo
- Output: retorno estimado com base no tipo de produto
- Comunicação entre componentes via `EventEmitter`

---

## 🛠️ Estrutura de Pastas

```text
src/app/
├── auth/                 # Tela de login
├── dashboard/
│   ├── components/
│   │   ├── product-list/        # Lista de produtos
│   │   ├── risk-profile/        # Perfil de risco
│   │   └── investment-simulator/ # Simulador
│   ├── services/                # Serviços mockados
│   └── models/                  # Interfaces de dados
```

---

## 🚀 Como Rodar o Projeto (Localmente)

```bash
# Instale as dependências:
npm install

# Execute o servidor:
ng serve

# Acesse no navegador:
http://localhost:4200/

# Credenciais de Acesso:
# Usuário: cliente@exemplo.com
# Senha:   123456

# Observação:
# As chamadas à API são simuladas com RxJS (of + delay) via InvestmentService.
```

---

## 🔮 Próximos Passos (Roadmap)

Para evoluir este MVP para uma versão 1.0 completa, o roadmap técnico inclui:

- [ ] Visualização de Dados: Implementação de gráficos (ngx-charts ou Chart.js) para evolução patrimonial.
- [ ] Histórico: Implementação da tabela de histórico de investimentos (GET /investimentos).
- [ ] Testes Unitários: Cobertura de testes com Jasmine/Karma focando em Services e Validadores (Meta: 80%).

---

<div align="center">
  Desenvolvido com 💙 e Angular 19
</div>
