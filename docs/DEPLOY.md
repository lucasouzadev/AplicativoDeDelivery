# 🚀 Y2K Delivery - Deploy Guide

Este projeto está configurado para deploy no **Cloudflare Pages**.

## Quick Deploy (10 minutos)

### 1. Criar Repositório no GitHub
```bash
# Visite: https://github.com/new
# Nome: y2k-delivery
# Clique: "Create repository"
```

### 2. Enviar Código
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/SEU-USUARIO/y2k-delivery.git
git branch -M main
git push -u origin main
```

### 3. Configurar Cloudflare Pages
```
1. Visite: https://dash.cloudflare.com
2. Workers & Pages → Create application → Pages
3. Connect to Git → Connect GitHub
4. Selecione: y2k-delivery
5. Configure:
   - Framework: Next.js
   - Build command: npm run build
   - Output directory: out
6. Save and Deploy
```

### 4. Aguardar Deploy
O deploy leva ~3-5 minutos. Você receberá um link:
```
https://y2k-delivery-xxx.pages.dev
```

## Atualizar App

Após qualquer mudança no código:
```bash
bash deploy.sh
# ou manualmente:
git add .
git commit -m "Suas mudanças"
git push
```

Cloudflare detecta automaticamente e faz novo deploy! 🚀

## Configurações do Projeto

Este projeto já está configurado com:
- ✅ `next.config.js` otimizado para Cloudflare
- ✅ `output: 'export'` para build estático
- ✅ `.gitignore` configurado
- ✅ Script de deploy automatizado

## Documentação Completa

Veja arquivos na pasta raiz:
- `DEPLOY-CLOUDFLARE.md` - Guia detalhado
- `DEPLOY-CHECKLIST.md` - Checklist rápido
- `deploy.sh` - Script automatizado

## Problemas?

### Build Failed
```bash
# Teste local primeiro
npm run build

# Se funcionar, force novo deploy
git commit --allow-empty -m "Force rebuild"
git push
```

### 404 em Rotas
Já configurado com `trailingSlash: true` ✅

### Dark Mode não Persiste
Comportamento esperado em build estático. 
O tema resetará a cada reload da página.

## Suporte

- Cloudflare Docs: https://developers.cloudflare.com/pages/
- Community: https://community.cloudflare.com/
- GitHub Issues: Crie issue no repositório

---

**Desenvolvido com 💚 | Design System Y2K**
