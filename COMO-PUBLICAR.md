# Como publicar a Agenda (e permitir instalar como app)

Esta pasta é o app pronto para publicar. Coloque **todos os arquivos juntos** num endereço https.

| Arquivo | Para que serve |
|---|---|
| index.html | o app |
| manifest.webmanifest | nome, cores e ícones do app instalado |
| sw.js | guarda o app no celular (abre rápido e funciona sem internet) |
| icone-*.png, favicon-32.png | ícones |

## Opção grátis: GitHub Pages
1. Crie um repositório (pode ser privado no plano pago; público no gratuito).
2. Envie os arquivos desta pasta.
3. Em Settings › Pages, escolha a branch principal e salve.
4. O endereço fica parecido com `https://SEU-USUARIO.github.io/agenda/`.

## Depois de publicado
- No celular, abra o endereço e use **Menu › Instalar o app no celular** (o app mostra os passos para iPhone e Android).
- Ao atualizar o app, troque a `VERSAO` no topo do `sw.js` para os celulares baixarem a versão nova.

## Antes de liberar para a equipe
- ✅ Botões de teste "Celular / PC" e "Carregar demonstração" da entrada: removidos (29/10).
- ✅ PIN de limpeza fixo: substituído pelo PIN do login quando URL_API estiver preenchido.
- Ligar o login: veja COMO-ATIVAR-LOGIN.md (no pacote servidor-fase2.zip).
