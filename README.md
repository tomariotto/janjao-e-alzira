# Site — Janjão e Alzira e os Mistérios de Cavendish

Site institucional do livro, feito em React + Vite + Tailwind CSS.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173` (ou a porta que o Vite escolher).

## Build de produção

```bash
npm run build
```

Gera a pasta `dist/` — é isso que a Vercel publica automaticamente a cada push.

## Deploy (workflow de release)

Diferente do Bolão (AWS/IIS com robocopy), este site usa **Vercel**:

1. Repositório no GitHub conectado ao projeto na Vercel.
2. Todo `git push` na branch `main` dispara build + deploy automático.
3. Domínio próprio `janjaoealzira.com.br` apontado via DNS para a Vercel.

Não existe branch de staging/beta — é um site simples, de uma pessoa só, então
o fluxo é: editar → testar local com `npm run dev` → `git push` → ar em produção
em ~1 minuto.

## Estrutura

- `src/components/` — uma seção do site por arquivo (Hero, Sobre, Pilares, Trailer, Autor, Escolas, Comprar, Contato, Footer).
- `public/assets/` — imagens, vídeo do trailer e PDF do pitch para escolas.
