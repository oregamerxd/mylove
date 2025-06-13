# Site Romântico para o Dia dos Namorados

Um lindo site interativo para o Dia dos Namorados com interface estilo Spotify. Perfeito para compartilhar com seu amor!

## Funcionalidades

- 💖 Tela de boas-vindas elegante com botão de início
- 🎵 Player de música estilo Spotify que toca automaticamente
- 💘 Linda animação de corações caindo
- 📷 Slideshow de fotos com transições suaves
- 💌 Mensagem romântica personalizável
- ⏱️ Contador em tempo real mostrando há quanto tempo estão juntos
- 📱 Design responsivo para todos os dispositivos
- 🚀 Pronto para publicação no GitHub Pages

## Como Adicionar Músicas e Fotos

### Processo Completo para Adicionar Músicas:

1. **Preparar o arquivo de áudio:**
   - Escolha uma música romântica em formato MP3
   - Renomeie o arquivo para `love-song.mp3`
   - Coloque o arquivo na pasta `assets/audio/`
   - Certifique-se de criar a estrutura de pastas se não existir: `assets/audio/`

2. **Configurar o player de música:**
   - Abra o arquivo `index.html`
   - Localize a seção do player de música (classe `spotify-player`)
   - Altere o título da música em `<h3>Nossa Música</h3>`
   - Altere o nome do artista em `<p>Artista Especial</p>`

3. **Adicionar capa do álbum:**
   - Salve a imagem da capa do álbum como `spotify-player.png`
   - Coloque a imagem na pasta `assets/images/`
   - A imagem deve ser quadrada para melhor aparência (recomendado: 300x300 pixels)
   - Certifique-se de criar a estrutura de pastas se não existir: `assets/images/`

4. **Como funciona a lógica da música:**
   - O arquivo `script.js` contém a função `playMusic()` que inicia a reprodução
   - A música é configurada para tocar automaticamente quando o usuário clica no botão de início
   - O volume é definido em 70% para uma experiência agradável
   - A função `togglePlayPause()` controla a reprodução quando o usuário clica no botão
   - A barra de progresso é animada pela função `animateProgressBar()` (simulação visual)
   - O player lida com bloqueios de autoplay do navegador, exibindo o ícone correto

### Processo Completo para Adicionar Fotos:

1. **Preparar as fotos:**
   - Selecione fotos do casal (recomendado: 5 fotos)
   - Redimensione as fotos para um tamanho adequado (recomendado: 800x800 pixels)
   - Renomeie as fotos como `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.
   - Coloque as fotos na pasta `assets/images/`
   - Certifique-se de criar a estrutura de pastas se não existir: `assets/images/`

2. **Configurar o slideshow:**
   - Abra o arquivo `script.js`
   - Localize o array `PHOTOS` no início do arquivo (linhas 5-11)
   - O array deve conter os caminhos para todas as suas fotos:
     ```javascript
     const PHOTOS = [
       "assets/images/photo1.jpg",
       "assets/images/photo2.jpg",
       "assets/images/photo3.jpg",
       "assets/images/photo4.jpg",
       "assets/images/photo5.jpg"
     ];
     ```
   - Adicione ou remova linhas conforme o número de fotos que você tem

3. **Como funciona a lógica do slideshow:**
   - A função `startPhotoSlideshow()` controla todo o slideshow
   - Os pontos de navegação são criados automaticamente baseados no número de fotos
   - Cada ponto corresponde a uma foto no array `PHOTOS`
   - A função `goToSlide(index)` muda para uma foto específica quando o usuário clica em um ponto
   - A função `changePhoto()` alterna automaticamente as fotos a cada 5 segundos
   - As transições entre fotos usam efeito de fade com duração de 1 segundo
   - Quando o usuário clica em um ponto, o slideshow automático é pausado por 10 segundos

## Como Personalizar o Site

1. **Alterar a Data de Início do Relacionamento:**
   - Abra o arquivo `script.js`
   - Localize a constante `START_DATE` no início do arquivo
   - Altere para a data correta no formato: `new Date("AAAA-MM-DDThh:mm:ss")`
   - Exemplo: `const START_DATE = new Date("2020-06-15T00:00:00");`

2. **Personalizar a Mensagem Romântica:**
   - Abra o arquivo `index.html`
   - Localize a classe `message` dentro da `message-container`
   - Substitua o texto existente pela sua mensagem personalizada

3. **Testar Localmente:**
   - Abra o arquivo `index.html` no seu navegador para testar o site

4. **Publicar no GitHub Pages:**
   - Crie um repositório no GitHub
   - Faça upload de todos os arquivos para o repositório
   - Ative o GitHub Pages nas configurações do repositório

## Customization Options

### Change Relationship Start Date
In `script.js`, modify the `START_DATE` constant:
```javascript
const START_DATE = new Date("YYYY-MM-DDThh:mm:ss");
```

### Add More Photos
In `script.js`, add more photos to the `PHOTOS` array:
```javascript
const PHOTOS = [
  "assets/images/photo1.jpg",
  "assets/images/photo2.jpg",
  // Add more photos here
];
```

### Change Colors
In `style.css`, you can modify the color scheme by changing the gradient colors:
```css
body {
  background: linear-gradient(135deg, #121212 0%, #1e3a8a 100%);
}
```

### Use Spotify Embed Instead of Local Audio
If you prefer to use a Spotify embed instead of a local audio file:

1. Get your Spotify embed code from the Spotify web player (Share > Embed)
2. Replace the audio element in `index.html` with your Spotify embed code
3. Update the play/pause functionality in `script.js` to work with the Spotify iframe API

## Credits

- Fonts: Google Fonts (Dancing Script, Montserrat)
- Icons: Font Awesome
- Created with HTML, CSS, and vanilla JavaScript

## License

This project is open source and available for personal use.

Enjoy your romantic website! ❤️
