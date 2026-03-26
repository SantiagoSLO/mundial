// --------------------------------------------------------------
// DATOS DE EJEMPLO (Equipos, Calendario, Resultados, Galería)
// --------------------------------------------------------------
const equiposData = [
  { pais: "Colombia", imagen: "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?auto=compress&cs=tinysrgb&w=600", descripcion: "Talento cafetero, garra y técnica impecable." },
  { pais: "Brasil", imagen: "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600", descripcion: "Jogo bonito y favoritos al título." },
  { pais: "Argentina", imagen: "https://images.pexels.com/photos/258376/pexels-photo-258376.jpeg?auto=compress&cs=tinysrgb&w=600", descripcion: "Campeones defensores, pasión total." },
  { pais: "España", imagen: "https://images.pexels.com/photos/3490346/pexels-photo-3490346.jpeg?auto=compress&cs=tinysrgb&w=600", descripcion: "Toque y posesión, escuela de élite." }
];

const calendarioData = [
  { equipos: "Colombia vs Brasil", fecha: "15 Nov 2025", hora: "15:00", lugar: "Estadio SENA Central" },
  { equipos: "Argentina vs España", fecha: "16 Nov 2025", hora: "18:30", lugar: "Arena Norte" },
  { equipos: "Colombia vs Argentina", fecha: "18 Nov 2025", hora: "16:15", lugar: "Estadio Metropolitano" },
  { equipos: "Brasil vs España", fecha: "19 Nov 2025", hora: "20:00", lugar: "Coliseo Mayor" }
];

const resultadosData = [
  { local: "Colombia", visitante: "Brasil", golesLocal: 2, golesVisit: 1, ganador: "Colombia" },
  { local: "Argentina", visitante: "España", golesLocal: 3, golesVisit: 2, ganador: "Argentina" },
  { local: "Brasil", visitante: "Argentina", golesLocal: 0, golesVisit: 0, ganador: "Empate" },
  { local: "Colombia", visitante: "España", golesLocal: 1, golesVisit: 0, ganador: "Colombia" }
];

const galeriaData = [
  "https://images.pexels.com/photos/4669105/pexels-photo-4669105.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3769022/pexels-photo-3769022.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/10369144/pexels-photo-10369144.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8062831/pexels-photo-8062831.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/258376/pexels-photo-258376.jpeg?auto=compress&cs=tinysrgb&w=600"
];

// Render equipos (cards)
function renderEquipos() {
  const container = document.getElementById('equiposGrid');
  if (!container) return;
  container.innerHTML = equiposData.map(team => `
    <div class="card">
      <img class="card-img" src="${team.imagen}" alt="${team.pais}" loading="lazy">
      <div class="card-content">
        <h3>${team.pais}</h3>
        <p>${team.descripcion}</p>
      </div>
    </div>
  `).join('');
}

// Render calendario (cards modernas)
function renderCalendario() {
  const container = document.getElementById('calendarioGrid');
  if (!container) return;
  container.innerHTML = calendarioData.map(match => `
    <div class="match-card">
      <div class="match-info">
        <div class="teams">⚽ ${match.equipos}</div>
        <div class="datetime"><i class="far fa-calendar-alt"></i> ${match.fecha}  <i class="far fa-clock"></i> ${match.hora}</div>
        <div><i class="fas fa-map-pin"></i> ${match.lugar}</div>
      </div>
      <i class="fas fa-futbol"></i>
    </div>
  `).join('');
}

// Render resultados (destacar ganador con verde)
function renderResultados() {
  const container = document.getElementById('resultadosList');
  if (!container) return;
  container.innerHTML = resultadosData.map(res => {
    let marcador = `${res.local} ${res.golesLocal} - ${res.golesVisit} ${res.visitante}`;
    let winnerClass = '';
    if (res.ganador !== "Empate") {
      winnerClass = 'winner';
    }
    // mostrar resaltado si el ganador es algún equipo, pero resaltamos marcador completo con ganador en verde
    let finalHtml = `<div class="result-item">
                      <span>${marcador}</span>`;
    if (res.ganador !== "Empate") {
      finalHtml += `<span class="${winnerClass}">🏆 ${res.ganador}</span>`;
    } else {
      finalHtml += `<span>🤝 Empate</span>`;
    }
    finalHtml += `</div>`;
    return finalHtml;
  }).join('');
}

// Render galería (imágenes)
function renderGaleria() {
  const container = document.getElementById('galeriaGrid');
  if (!container) return;
  container.innerHTML = galeriaData.map(img => `
    <div class="galeria-item">
      <img src="${img}" alt="Galería Mundial SENA" loading="lazy">
    </div>
  `).join('');
}

// ========== SCROLL REVEAL (animación al aparecer) ==========
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  function checkReveal() {
    for (let el of reveals) {
      const windowHeight = window.innerHeight;
      const rect = el.getBoundingClientRect();
      const revealPoint = 120;
      if (rect.top < windowHeight - revealPoint) {
        el.classList.add('active');
      }
    }
  }
  window.addEventListener('scroll', checkReveal);
  checkReveal();
}

// Navbar cambio de color al hacer scroll
function handleNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// menú hamburguesa + scroll suave al menú y botón hero
function initMobileMenuAndSmoothScroll() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('active');
      // cambiar ícono
      const icon = hamburger.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
    // cerrar menú al hacer click en enlace
    const links = navMenu.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      });
    });
  }

  // scroll suave manual para enlaces internos + botón ver equipos
  const allLinks = document.querySelectorAll('a[href^="#"], .btn-primary');
  allLinks.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      let targetId = this.getAttribute('href');
      if (this.id === 'btnVerEquipos') targetId = '#equipos';
      if (targetId && targetId !== '#' && targetId !== '#inicio' && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (targetId === '#inicio') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
  });

  // Botón hero adicional
  const heroBtn = document.getElementById('btnVerEquipos');
  if(heroBtn) {
    heroBtn.addEventListener('click', (e) => {
      const equiposSection = document.getElementById('equipos');
      if(equiposSection) equiposSection.scrollIntoView({ behavior: 'smooth' });
    });
  }
}

// Pequeño fix para navbar fija y no ocultar contenido al hacer scroll con offset (por si algún enlace)
function adjustScrollPadding() {
  const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 80;
  document.querySelectorAll('section[id]').forEach(section => {
    section.style.scrollMarginTop = `${navbarHeight + 10}px`;
  });
}

// Llamar todas las funciones de render y eventos
function init() {
  renderEquipos();
  renderCalendario();
  renderResultados();
  renderGaleria();
  handleNavbarScroll();
  initMobileMenuAndSmoothScroll();
  initScrollReveal();
  adjustScrollPadding();
  // Forzar que los elementos reveal no queden ocultos inicialmente
  setTimeout(() => {
    initScrollReveal();
  }, 200);
}

// Iniciar todo cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);
