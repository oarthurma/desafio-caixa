# 🏦 Portal do Investidor - Desafio Frontend

![Angular](https://img.shields.io/badge/Angular-19-dd0031?style=for-the-badge&logo=angular)
![Material Design](https://img.shields.io/badge/Material-Design-blue?style=for-the-badge&logo=materialdesign)
![Status](https://img.shields.io/badge/Status-MVP%20Concluído-success?style=for-the-badge)

> ⚠️ **NOTA SOBRE O ENVIO:** > Devido à restrição de upload de 2MB deste sistema, este pacote contém apenas o código-fonte essencial (`src/`).
> Para visualizar o histórico completo de commits, branches e a documentação detalhada, acesse o repositório completo no GitHub:
>
> 👉 **[https://github.com/oarthurma/desafio-caixa](https://github.com/oarthurma/desafio-caixa)**

---

## 📋 Sobre o Projeto

Solução desenvolvida para o Desafio Técnico de Frontend da **CAIXA**, simulando o ambiente digital do **Portal do Investidor**. A aplicação foca na jornada do cliente bancário: autenticação segura, análise de perfil e simulação de produtos financeiros.

### ✅ Critérios de Avaliação (Status do Projeto)

Mapeamento das funcionalidades conforme solicitado no desafio:

| Critério do Desafio         | Status       | Detalhes                                                     |
| :-------------------------- | :----------- | :----------------------------------------------------------- |
| **Funcionalidade Completa** | ✅ Concluído | Fluxo de Login -> Dashboard -> Simulação 100% funcional.     |
| **Código Limpo e Modular**  | ✅ Concluído | Arquitetura baseada em Serviços e Componentes reutilizáveis. |
| **Integração com API**      | ✅ Concluído | Mock de serviços (`RxJS`) simulando latência real.           |
| **Visualização de Dados**   | ✅ Adaptado  | Uso de Listas e Cards (MVP) focando em clareza imediata.     |
| **Responsividade**          | ✅ Concluído | Layout adaptável para Mobile e Desktop (Grid System).        |
| **Testes (80%)**            | 🔄 Roadmap   | Estrutura configurada, cobertura planejada para v2.0.        |

---

## 🎯 Decisões de Arquitetura & Design

Para entregar um MVP robusto e alinhado com ambientes corporativos, adotamos:

1.  **Padrão NgModule (Clássico):**

    - Optamos pela arquitetura baseada em Módulos (`DashboardModule`, `AppModule`) em vez de _Standalone_.
    - **Motivo:** Maior estabilidade, facilidade de manutenção em grandes equipes e alinhamento com legados corporativos bancários.

2.  **Identidade Visual Oficial:**

    - Aplicação estrita da paleta institucional:
      - 🔵 **Azul Institucional:** `#0066B3` (Pantone 287C)
      - 🟠 **Laranja Institucional:** `#F7941E` (Pantone 151C)
      - ⚪ **Cinza Base:** `#F1F2F2`

3.  **Acessibilidade e UX:**
    - Feedback visual de carregamento (Spinners) em todas as ações assíncronas.
    - Formulários com validação reativa e mensagens de erro claras (`ReactiveForms`).
    - Contraste de cores ajustado para leitura confortável.

---

## ✨ Funcionalidades Principais

### 🔐 Autenticação & Segurança

- Login seguro com validação de campos.
- Simulação de Token JWT e Guardas de Rota (`AuthGuard`) protegendo o acesso ao painel.

### 📊 Dashboard & Simulação

- **Comunicação Pai-Filho:** O usuário seleciona um produto na lista (`ProductList`) e o simulador (`Dashboard`) recebe os dados automaticamente via `@Output`.
- **Simulador Real:** Cálculo de rentabilidade com projeção de valores baseada em inputs do usuário.
- **Perfil Dinâmico:** Carregamento de dados mockados simulando backend.

---

## 🛠️ Estrutura de Pastas

```text
src/app/dashboard/
├── components/
│   ├── product-list/    # Lista de recomendações (Smart Component)
│   ├── risk-profile/    # Exibição de perfil
├── services/            # Lógica de negócio e chamadas de API (Mock)
├── models/              # Interfaces (Tipagem forte)
└── dashboard.component  # Controlador principal e Simulador
```

---

## 🚀 Como Rodar o Projeto (Localmente)

Como a pasta `node_modules` não foi incluída no upload (para respeitar o limite de tamanho), siga os passos abaixo:

1. **Instale as dependências:**

   ```bash
   npm install
   ```

2. **Execute o servidor:**

   ```bash
   ng serve
   ```

3. **Acesse:**
   Abra `http://localhost:4200/`.

**Credenciais de Acesso:**

- **Usuário:** `cliente@exemplo.com`
- **Senha:** `123456`

---

## 🔮 Próximos Passos (Roadmap v2.0)

Para a próxima sprint de evolução, estão planejados:

- [ ] Implementação de gráficos de evolução patrimonial (`ngx-charts`).
- [ ] Testes Unitários com cobertura de 80% (Jasmine/Karma).
- [ ] Migração das fontes CDN para arquivos locais (segurança de intranet).

---

<div align="center">
  Desenvolvido com 💙 e Angular 19
</div>
