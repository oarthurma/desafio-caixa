# 🏦 Portal do Investidor - Desafio Frontend

![Angular](https://img.shields.io/badge/Angular-19-dd0031?style=for-the-badge&logo=angular)
![Material Design](https://img.shields.io/badge/Material-Design-blue?style=for-the-badge&logo=materialdesign)
![Status](https://img.shields.io/badge/Status-MVP%20Concluído-success?style=for-the-badge)

> ⚠️ **NOTA SOBRE O ENVIO:** > Devido à restrição de upload de 2MB deste sistema, este pacote contém apenas o código-fonte essencial (`src/`).
> Para visualizar o histórico completo de commits, branches e a documentação detalhada, acesse o repositório completo no GitHub:
>
> 👉 ** https://github.com/oarthurma/desafio-caixa **

---

## 📋 Sobre o Projeto

Solução desenvolvida para o Desafio Técnico de Frontend, simulando o ambiente digital do **Portal do Investidor**. A aplicação foca na jornada do cliente bancário: autenticação, análise de perfil e simulação de produtos financeiros (CDB, Fundos, Tesouro).

### 🎯 Decisões de Arquitetura & Design

Para entregar um MVP robusto e alinhado com ambientes corporativos, adotamos:

1.  **Padrão NgModule (Clássico):**

    - Embora o Angular 19 incentive _Standalone Components_, optamos pela arquitetura baseada em Módulos (`DashboardModule`, `AppModule`).
    - **Motivo:** Maior estabilidade, facilidade de manutenção em grandes equipes e alinhamento com legados corporativos comuns em instituições financeiras.

2.  **Identidade Visual Oficial:**

    - Utilização estrita da paleta institucional:
      - 🔵 **Azul Institucional:** `#0066B3` (Pantone 287C)
      - 🟠 **Laranja Institucional:** `#F7941E` (Pantone 151C)
      - ⚪ **Cinza Base:** `#F1F2F2`

3.  **Estratégia de MVP Enxuto:**
    - Foco total na funcionalidade crítica (Login -> Simulação).
    - Substituição estratégica de gráficos complexos por listas informativas para garantir performance e entrega dentro do prazo (Time-to-Market).

---

## ✨ Funcionalidades

### 🔐 Autenticação & Segurança

- Interface de login com validação reativa (`ReactiveForms`).
- Simulação de Token JWT e Guardas de Rota (`AuthGuard`) protegendo o acesso ao painel.

### 📊 Dashboard & Simulação

- **Comunicação entre Componentes:** O usuário seleciona um produto na lista e o simulador recebe os dados automaticamente via `@Output` (Event Emitter).
- **Feedback Visual:** Spinners de carregamento e tratamento de estados assíncronos com RxJS (`of`, `delay`).
- **Simulador Real:** Cálculo de rentabilidade com projeção de valores baseada em inputs do usuário.

---

## 🛠️ Arquitetura e Tecnologias

O projeto foi construído utilizando **Angular 19** no padrão **NgModule**, garantindo estrutura modular.

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

## 🚀 Como Rodar o Projeto (Localmente)

Como a pasta `node_modules` não foi incluída no upload (para respeitar o limite de tamanho), siga os passos abaixo:

1. **Instale as dependências:**
   É necessário ter o Node.js instalado. Na raiz do projeto, execute:

   ```bash
   npm install
   ```

2. **Execute o servidor:**

   ```bash
   ng serve
   ```

3. **Acesse:**
   Abra `http://localhost:4200/` no navegador.

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
