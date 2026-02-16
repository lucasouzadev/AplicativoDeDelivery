/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Necessário para Cloudflare Pages
  images: {
    unoptimized: true, // Necessário para export estático
  },
  trailingSlash: true, // Melhor compatibilidade com Cloudflare
}

module.exports = nextConfig
