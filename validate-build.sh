#!/bin/bash

# 🧪 Script de Validação de Build - Y2K Delivery
# Execute: bash validate-build.sh

echo "🧪 Y2K DELIVERY - VALIDAÇÃO DE BUILD"
echo "======================================"
echo ""

# Cores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}📋 Verificando configuração...${NC}"
echo ""

# 1. Verificar next.config.js
echo "1️⃣ Verificando next.config.js..."
if grep -q "output: 'export'" next.config.js; then
    echo -e "${GREEN}   ✅ output: 'export' configurado${NC}"
else
    echo -e "${RED}   ❌ Falta output: 'export'${NC}"
    exit 1
fi

if grep -q "unoptimized: true" next.config.js; then
    echo -e "${GREEN}   ✅ images.unoptimized configurado${NC}"
else
    echo -e "${RED}   ❌ Falta images.unoptimized${NC}"
    exit 1
fi

if grep -q "trailingSlash: true" next.config.js; then
    echo -e "${GREEN}   ✅ trailingSlash configurado${NC}"
else
    echo -e "${YELLOW}   ⚠️  Recomendado: trailingSlash: true${NC}"
fi

echo ""

# 2. Verificar rotas dinâmicas
echo "2️⃣ Verificando rotas dinâmicas..."
if ls app/**/\[*\]/page.tsx 1> /dev/null 2>&1; then
    for file in app/**/\[*\]/page.tsx; do
        if grep -q "generateStaticParams" "$file"; then
            echo -e "${GREEN}   ✅ $(basename $(dirname $file)) tem generateStaticParams${NC}"
        else
            echo -e "${RED}   ❌ $(basename $(dirname $file)) precisa de generateStaticParams${NC}"
            exit 1
        fi
    done
else
    echo -e "${GREEN}   ✅ Nenhuma rota dinâmica encontrada${NC}"
fi

echo ""

# 3. Verificar uso de next/image
echo "3️⃣ Verificando uso de next/image..."
if grep -r "from 'next/image'" app/ components/ 2>/dev/null; then
    echo -e "${RED}   ❌ next/image encontrado (não compatível com export)${NC}"
    echo -e "${YELLOW}   Use <img> ou configure unoptimized: true${NC}"
else
    echo -e "${GREEN}   ✅ Nenhum uso de next/image${NC}"
fi

echo ""

# 4. Verificar getServerSideProps ou getStaticProps
echo "4️⃣ Verificando funções server-side..."
if grep -r "getServerSideProps\|getStaticProps" app/ 2>/dev/null; then
    echo -e "${RED}   ❌ getServerSideProps/getStaticProps não funciona com export${NC}"
else
    echo -e "${GREEN}   ✅ Sem funções server-side${NC}"
fi

echo ""

# 5. Verificar node_modules
echo "5️⃣ Verificando dependências..."
if [ -d "node_modules" ]; then
    echo -e "${GREEN}   ✅ node_modules instalado${NC}"
else
    echo -e "${RED}   ❌ Execute: npm install${NC}"
    exit 1
fi

echo ""

# 6. Tentar build
echo "6️⃣ Executando build de teste..."
echo -e "${YELLOW}   Isso pode demorar alguns minutos...${NC}"
echo ""

if npm run build 2>&1 | tee build.log; then
    echo ""
    echo -e "${GREEN}✅ BUILD PASSOU COM SUCESSO!${NC}"
    echo ""
    echo -e "${BLUE}📊 Resultado:${NC}"
    if [ -d "out" ]; then
        echo "   • Pasta 'out' criada"
        echo "   • $(find out -type f | wc -l) arquivos gerados"
        echo ""
    fi
    echo -e "${GREEN}🚀 Pronto para deploy no Cloudflare!${NC}"
    echo ""
    rm -f build.log
    exit 0
else
    echo ""
    echo -e "${RED}❌ BUILD FALHOU!${NC}"
    echo ""
    echo -e "${YELLOW}📋 Verifique os erros acima${NC}"
    echo -e "${YELLOW}💡 Log salvo em: build.log${NC}"
    echo ""
    exit 1
fi
