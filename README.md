# Y2K DELIVERY APP 🚀

Aplicativo de delivery com design system inspirado na estética Y2K/Anos 2000.

## 🎨 Design System

### Cores
- **Cream**: `#E8E4DB` - Background principal
- **Black**: `#000000` - Texto e bordas
- **Blue**: `#A8C5CD` - Accent pastel
- **Green**: `#5F7F61` - Accent militar
- **Beige**: `#D4CFC4` - Secondary

### Tipografia
- **Display**: Bebas Neue (títulos em uppercase)
- **Mono**: Space Mono (textos técnicos e datas)
- **Style**: Alto contraste, bold, condensado

### Componentes
- Cards estilo polaroid com bordas grossas pretas
- Botões com sombra e animação
- Inputs com bordas destacadas
- Grid layout 2 colunas
- Badges e tags retrô

## 📱 Páginas Implementadas

1. **Home (`/`)** - Página inicial com categorias e lojas em destaque
2. **Login (`/login`)** - Autenticação e criação de conta
3. **Store (`/store/[id]`)** - Página da loja com menu completo
4. **Cart (`/cart`)** - Carrinho de compras com gerenciamento de itens
5. **Checkout (`/checkout`)** - Endereço e agendamento de entrega
6. **Payment (`/payment`)** - Métodos de pagamento e finalização
7. **Confirmation (`/confirmation`)** - Confirmação do pedido
8. **Tracking (`/tracking`)** - Rastreamento em tempo real
9. **History (`/history`)** - Histórico de pedidos

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Bebas Neue, Space Mono)

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone ou navegue até a pasta do projeto
cd y2k-delivery

# Instale as dependências
npm install

# Rode o servidor de desenvolvimento
npm run dev

# Abra http://localhost:3000 no navegador
```

### Build para Produção

```bash
# Criar build otimizado
npm run build

# Rodar build de produção
npm start
```

## 📂 Estrutura do Projeto

```
y2k-delivery/
├── app/
│   ├── layout.tsx              # Layout principal com BottomNav
│   ├── page.tsx                # Home page
│   ├── globals.css             # Estilos globais Y2K
│   ├── login/page.tsx          # Login/Signup
│   ├── store/[id]/page.tsx     # Página da loja (dinâmica)
│   ├── cart/page.tsx           # Carrinho
│   ├── checkout/page.tsx       # Checkout
│   ├── payment/page.tsx        # Pagamento
│   ├── confirmation/page.tsx   # Confirmação
│   ├── tracking/page.tsx       # Rastreamento
│   └── history/page.tsx        # Histórico
├── components/
│   ├── BottomNav.tsx           # Navegação inferior
│   ├── Header.tsx              # Header reutilizável
│   ├── ProductCard.tsx         # Card de produto
│   └── StoreCard.tsx           # Card de loja
├── data/
│   └── mockData.ts             # Dados mockados
├── public/                     # Arquivos estáticos
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🎯 Funcionalidades Implementadas

### ✅ Autenticação
- Login e criação de conta
- Validação de formulários
- Social login (UI mockado)

### ✅ Navegação e Busca
- Home com categorias
- Filtro por categoria
- Busca de restaurantes
- Cards de lojas

### ✅ Loja e Produtos
- Detalhes da loja
- Menu completo
- Favoritar lojas
- Adicionar ao carrinho

### ✅ Carrinho
- Gerenciamento de quantidade
- Remover itens
- Limpar carrinho
- Cálculo de totais

### ✅ Checkout e Pagamento
- Endereço de entrega
- Agendamento de delivery
- Múltiplos métodos de pagamento
- Adicionar novo cartão
- Resumo do pedido

### ✅ Confirmação e Rastreamento
- ID do pedido
- Tempo estimado
- Timeline de status
- Informações do entregador
- Código de entrega
- Mapa (mockado)

### ✅ Histórico
- Lista de pedidos passados
- Filtros por status
- Estatísticas de uso
- Opção de pedir novamente

## 🎨 Customizações Possíveis

### Modificar Cores
Edite `tailwind.config.js`:

```javascript
colors: {
  y2k: {
    cream: '#SUA_COR',
    black: '#SUA_COR',
    // ...
  }
}
```

### Adicionar Novas Fontes
Edite `app/globals.css`:

```css
@import url('https://fonts.googleapis.com/...');
```

### Modificar Animações
Todas as animações estão em `app/globals.css`:

```css
@keyframes slideInUp {
  /* ... */
}
```

## 🔄 Próximos Passos

Para integrar com backend real:

1. **API Integration**: Substituir dados mockados por chamadas API
2. **State Management**: Adicionar Zustand/Redux para gerenciar carrinho
3. **Authentication**: Integrar com NextAuth.js
4. **Real-time Tracking**: WebSockets para tracking ao vivo
5. **Payment Gateway**: Integrar Stripe/PayPal
6. **Database**: Supabase ou Firebase para persistência

## 💡 Dicas de Desenvolvimento

- Use `npm run dev` para hot reload
- Componentes são client-side por padrão (`'use client'`)
- Dados mockados em `/data/mockData.ts`
- CSS custom em `app/globals.css`
- Rotas dinâmicas em `app/[pasta]/[id]/page.tsx`

## 📝 Licença

Projeto educacional - Y2K Delivery App

---

**Desenvolvido com 💚 usando Next.js e Design System Y2K**
