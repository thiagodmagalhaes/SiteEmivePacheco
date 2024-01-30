document.addEventListener('DOMContentLoaded', function () {
  const secServSection = document.getElementById('secServ');
  const showSmartSection = document.querySelector('.showSmart');
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));


  // Função para verificar a visibilidade da seção
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Função para lidar com a visibilidade e acionar o ScrollReveal
  function handleVisibility() {
    if (isElementInViewport(showSmartSection)) {
      // Adiciona a classe 'visible' à seção secServ quando a seção showSmart estiver visível
      secServSection.classList.add('visible');

      // Inicializa o ScrollReveal apenas quando a seção showSmart estiver visível
      ScrollReveal({ duration: 1000 });
      ScrollReveal().reveal('.headline');
      ScrollReveal().reveal('.tagline', { delay: 500 });
      ScrollReveal().reveal('.tagline2', { delay: 600 });
      ScrollReveal().reveal('.tagline3', { delay: 700 });
      ScrollReveal().reveal('.tagline4', { delay: 800 });
      ScrollReveal().reveal('.tagline5', { delay: 900 });
      ScrollReveal().reveal('.tagline5', { delay: 1000 });
      ScrollReveal().reveal('.tagline6', { delay: 1100 });
      ScrollReveal().reveal('.tagline7', { delay: 1150 });
      ScrollReveal().reveal('.tagline8', { delay: 1300 });
      ScrollReveal().reveal('.tagline9', { delay: 1400 });
      ScrollReveal().reveal('.tagline10', { delay: 1500 });
      ScrollReveal().reveal('.tagline11', { delay: 1600 });
      ScrollReveal().reveal('.tagline12', { delay: 1700 });
      ScrollReveal().reveal('.tagline13', { delay: 1800 });


      // Remove o listener após a ativação para não reativar o ScrollReveal
      window.removeEventListener('scroll', handleVisibility);
    }
  }

  // Adiciona um listener de rolagem para verificar a visibilidade
  window.addEventListener('scroll', handleVisibility);

  // Verifica a visibilidade ao carregar a página
  handleVisibility();
});
