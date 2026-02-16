#!/bin/bash

# 🚀 Script de Deploy Automático - Y2K Delivery
# Execute: bash deploy.sh

echo "🚀 Y2K DELIVERY - DEPLOY AUTOMÁTICO"
echo "===================================="
echo ""

# Cores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verificar se está em um repositório git
if [ ! -d .git ]; then
    echo -e "${RED}❌ Erro: Não é um repositório Git!${NC}"
    echo ""
    echo "Execute primeiro:"
    echo "  git init"
    echo "  git remote add origin https://github.com/SEU-USUARIO/y2k-delivery.git"
    exit 1
fi

# Verificar se há mudanças
if [[ -z $(git status -s) ]]; then
    echo -e "${YELLOW}⚠️  Nenhuma mudança para fazer commit${NC}"
    echo ""
else
    echo -e "${GREEN}✅ Mudanças detectadas!${NC}"
    echo ""
    
    # Mostrar mudanças
    echo "Arquivos modificados:"
    git status -s
    echo ""
    
    # Pedir mensagem de commit
    read -p "📝 Mensagem do commit: " commit_message
    
    if [ -z "$commit_message" ]; then
        commit_message="Update $(date +'%Y-%m-%d %H:%M:%S')"
    fi
    
    # Adicionar arquivos
    echo ""
    echo "Adicionando arquivos..."
    git add .
    
    # Fazer commit
    echo "Fazendo commit..."
    git commit -m "$commit_message"
    
    echo -e "${GREEN}✅ Commit realizado!${NC}"
    echo ""
fi

# Push para GitHub
echo "Enviando para GitHub..."
git push

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅ DEPLOY CONCLUÍDO COM SUCESSO!${NC}"
    echo ""
    echo "🌐 Seu app será atualizado em 2-5 minutos"
    echo "📊 Acompanhe em: https://dash.cloudflare.com"
    echo ""
else
    echo ""
    echo -e "${RED}❌ Erro ao fazer push${NC}"
    echo ""
    echo "Possíveis soluções:"
    echo "1. Configure seu Git:"
    echo "   git config --global user.email 'seu@email.com'"
    echo "   git config --global user.name 'Seu Nome'"
    echo ""
    echo "2. Verifique se o remote está correto:"
    echo "   git remote -v"
    echo ""
    echo "3. Tente fazer push manualmente:"
    echo "   git push -u origin main"
    echo ""
    exit 1
fi
