// Configuração da data de início do relacionamento - ALTERE PARA A DATA CORRETA DO CASAL
const START_DATE = new Date("2024-06-18T13:00:00");

// Array de fotos para o slideshow - ADICIONE MAIS FOTOS CONFORME NECESSÁRIO
const PHOTOS = [
  "assets/images/photo1.jpg",
  "assets/images/photo2.jpg",
  "assets/images/photo3.jpg",
  "assets/images/photo4.jpg",
  "assets/images/photo5.jpg"
];

// Elementos DOM
const startBtn = document.getElementById("startBtn");
const welcomeScreen = document.getElementById("welcome-screen");
const content = document.getElementById("content");
const bgMusic = document.getElementById("bgMusic");
const playPauseBtn = document.getElementById("playPauseBtn");
const playPauseIcon = playPauseBtn.querySelector("i");
const slideshowImg = document.getElementById("slideshow-img");
const progressBar = document.querySelector(".progress");
const timer = document.getElementById("timer");

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  // Adicionar event listeners
  startBtn.addEventListener("click", startExperience);
  playPauseBtn.addEventListener("click", togglePlayPause);
});

// Função para iniciar a experiência completa
function startExperience() {
  // Esconder a tela de boas-vindas com animação fade out
  welcomeScreen.style.opacity = "0";
  
  setTimeout(() => {
    welcomeScreen.style.visibility = "hidden";
    content.classList.remove("hidden");
    
    // Iniciar todas as funcionalidades
    playMusic();
    startHeartAnimation();
    startPhotoSlideshow();
    startRelationshipTimer();
    animateProgressBar();
  }, 500);
}

// Função para tocar a música
function playMusic() {
  // Verifica se o arquivo de áudio existe
  console.log("Tentando tocar áudio: " + bgMusic.src);
  
  // Configura o volume
  bgMusic.volume = 0.7; // Volume a 70%
  
  // Adiciona listener para erros de áudio
  bgMusic.onerror = function() {
    console.error("Erro ao carregar o arquivo de áudio. Verifique se o arquivo existe no caminho correto.");
    alert("Não foi possível carregar o arquivo de áudio. Verifique se 'love-song.mp3' está na pasta assets/audio/");
    playPauseIcon.classList.remove("fa-pause");
    playPauseIcon.classList.add("fa-play");
  };
  
  // Tenta tocar a música - pode falhar devido a políticas de autoplay do navegador
  const playPromise = bgMusic.play();
  
  if (playPromise !== undefined) {
    playPromise.catch(error => {
      console.log("Autoplay foi bloqueado pelo navegador: ", error);
      // Muda o ícone para play se o autoplay falhar
      playPauseIcon.classList.remove("fa-pause");
      playPauseIcon.classList.add("fa-play");
      
      // Adiciona uma mensagem para o usuário
      alert("Clique no botão de play para iniciar a música. Alguns navegadores bloqueiam a reprodução automática.");
    });
  }
}

// Alternar entre play e pause
function togglePlayPause() {
  if (bgMusic.paused) {
    bgMusic.play();
    playPauseIcon.classList.remove("fa-play");
    playPauseIcon.classList.add("fa-pause");
  } else {
    bgMusic.pause();
    playPauseIcon.classList.remove("fa-pause");
    playPauseIcon.classList.add("fa-play");
  }
}

// Animar a barra de progresso simulando um player real
function animateProgressBar() {
  let width = 0;
  const duration = 180; // Duração simulada da música em segundos
  const interval = 1000; // Atualizar a cada segundo
  
  setInterval(() => {
    if (bgMusic.paused) return; // Não atualiza se estiver pausado
    
    width = (width + 100/duration) % 100;
    progressBar.style.width = width + "%";
  }, interval);
}

// Animação de corações caindo
function startHeartAnimation() {
  const hearts = document.querySelector(".hearts");
  const heartSymbols = ["❤️", "💖", "💗", "💓", "💕"];
  
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    
    // Escolhe um símbolo de coração aleatório
    const randomHeart = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    heart.textContent = randomHeart;
    
    // Posição e tamanho aleatórios
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    
    // Adiciona uma velocidade de queda aleatória
    const fallDuration = Math.random() * 3 + 3; // Entre 3 e 6 segundos
    heart.style.animation = `fall ${fallDuration}s linear infinite`;
    
    hearts.appendChild(heart);
    
    // Remove o coração após cair para evitar sobrecarga de memória
    setTimeout(() => heart.remove(), fallDuration * 1000);
  }, 300);
}

// Slideshow de fotos
function startPhotoSlideshow() {
  let currentPhotoIndex = 0;
  const paginationContainer = document.getElementById('slideshow-pagination');
  
  // Criar os pontos de paginação
  PHOTOS.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = 'pagination-dot';
    if (index === 0) dot.classList.add('active');
    dot.dataset.index = index;
    dot.addEventListener('click', () => goToSlide(index));
    paginationContainer.appendChild(dot);
  });
  
  // Função para ir para um slide específico
  function goToSlide(index) {
    slideshowImg.style.opacity = "0";
    
    setTimeout(() => {
      currentPhotoIndex = index;
      slideshowImg.src = PHOTOS[currentPhotoIndex];
      slideshowImg.style.opacity = "1";
      updatePaginationDots();
    }, 1000);
  }
  
  // Função para atualizar os pontos de paginação
  function updatePaginationDots() {
    const dots = document.querySelectorAll('.pagination-dot');
    dots.forEach((dot, index) => {
      if (index === currentPhotoIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }
  
  // Função para trocar a foto com efeito de fade
  function changePhoto() {
    slideshowImg.style.opacity = "0";
    
    setTimeout(() => {
      currentPhotoIndex = (currentPhotoIndex + 1) % PHOTOS.length;
      slideshowImg.src = PHOTOS[currentPhotoIndex];
      slideshowImg.style.opacity = "1";
      updatePaginationDots();
    }, 1000);
  }
  
  // Troca a foto a cada 5 segundos
  const slideshowInterval = setInterval(changePhoto, 5000);
  
  // Pausa o slideshow automático quando o usuário clica em um ponto
  paginationContainer.addEventListener('click', () => {
    clearInterval(slideshowInterval);
    // Reinicia o slideshow após 10 segundos de inatividade
    setTimeout(() => {
      setInterval(changePhoto, 5000);
    }, 10000);
  });
}

// Contador de tempo de relacionamento
function startRelationshipTimer() {
  function updateTimer() {
    const now = new Date();
    const diff = now - START_DATE;
    
    // Cálculo de tempo
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 365);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    
    // Formatação do texto com cores destacadas para os números
    timer.innerHTML = `
      <span class="highlight">${years}</span> ${years === 1 ? 'ano' : 'anos'}, 
      <span class="highlight">${days}</span> ${days === 1 ? 'dia' : 'dias'}, 
      <span class="highlight">${hours}</span> ${hours === 1 ? 'hora' : 'horas'}, 
      <span class="highlight">${minutes}</span> ${minutes === 1 ? 'minuto' : 'minutos'} e 
      <span class="highlight">${seconds}</span> ${seconds === 1 ? 'segundo' : 'segundos'}
    `;
  }
  
  // Atualiza imediatamente e depois a cada segundo
  updateTimer();
  setInterval(updateTimer, 1000);
}