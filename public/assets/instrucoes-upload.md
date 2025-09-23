# Instruções para Upload da Landing Page "Breaking the Funnel"

## Arquivos para Upload

1. **landing_breaking_the_funnel.html** - Arquivo principal da landing page
2. **Pasta assets/** contendo:
   - cover.jpg (capa do livro)
   - author.jpg (foto do autor)
   - logo-malossi.png (logo do Malossi Studio)

## Como fazer o upload via FTP no WordPress

### Caminho sugerido:
```
/wp-content/uploads/landing-breaking-the-funnel/
```

### Passos:
1. Acesse seu painel FTP (FileZilla, cPanel File Manager, etc.)
2. Navegue até a pasta `/wp-content/uploads/`
3. Crie uma nova pasta chamada `landing-breaking-the-funnel`
4. Faça upload de todos os arquivos:
   ```
   /wp-content/uploads/landing-breaking-the-funnel/
   ├── landing_breaking_the_funnel.html
   └── assets/
       ├── cover.jpg
       ├── author.jpg
       └── logo-malossi.png
   ```

### URL de acesso:
```
https://seudominio.com/wp-content/uploads/landing-breaking-the-funnel/landing_breaking_the_funnel.html
```

## Configurações que você pode ajustar

### 1. Preço do livro
Procure por `R$ 29,90` no arquivo HTML e altere conforme necessário.

### 2. Link de compra
Substitua todas as ocorrências de:
```
https://loja.uiclap.com/titulo/ua88955/
```
pelo seu link de venda atual.

### 3. ISBN (se disponível)
No JSON-LD (linha ~25-44), adicione:
```json
"isbn": "SEU-ISBN-AQUI",
```

### 4. Trecho do livro
Adicione conteúdo na seção "Leia um trecho grátis" substituindo o botão por texto ou PDF.

### 5. Analytics
Substitua os comentários:
- `<!-- INSERT GA4 HERE -->` pelo código do Google Analytics
- `<!-- INSERT META PIXEL HERE -->` pelo código do Meta Pixel

#### Exemplo GA4:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

#### Exemplo Meta Pixel:
```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'SEU_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

### 6. URLs canônicas
Atualize os links canônicos e Open Graph com sua URL final:
```html
<link rel="canonical" href="https://seudominio.com/breaking-the-funnel">
<meta property="og:url" content="https://seudominio.com/breaking-the-funnel">
```

## Teste A/B para CTAs

O arquivo está preparado para testes A/B. Você pode alternar entre:

**Versão A (atual):**
- "Garanta seu exemplar"
- "Comprar agora — Envio imediato"

**Versão B (sugerida):**
- "Comprar agora — Estoque limitado"
- "Acesso liberado em 24h"

## Otimizações de Performance

A landing page já inclui:
- ✅ CSS crítico inline
- ✅ Fonts precarregadas
- ✅ Lazy loading preparado
- ✅ Animações GPU-friendly
- ✅ Compressão de imagens recomendada

## Suporte e Manutenção

Para alterações futuras:
1. **Textos**: Edite diretamente no HTML
2. **Cores**: Modifique as variáveis CSS no `:root`
3. **Imagens**: Substitua na pasta `assets/`
4. **CTAs**: Altere os links `href` e textos dos botões

## Backup

Sempre mantenha uma cópia local dos arquivos antes de fazer alterações no servidor.