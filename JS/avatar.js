
// NAVBAR
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function cerrarBarra() {
  var x = document.getElementById('myTopnav');
  if (x.className === "topnav responsive") {
    x.className = "topnav";
  } else {
    className = "topnav responsive";
  }
}




// SLIDERS
const fila = document.querySelector('.contenedor-carrusel');
const imagenes = document.querySelector('.img');

const flechaIzq = document.querySelector('.button-left');
const flechaDer = document.querySelector('.button-right');

flechaDer.addEventListener('click', () => {
  fila.scrollLeft += fila.offsetWidth;
});

flechaIzq.addEventListener('click', () => {
  fila.scrollLeft -= fila.offsetWidth;
});


// CAMBIO DE ELEMENTO
const principal = document.getElementById(`principal`);
const lore = document.getElementById(`lore`);
const visuales = document.getElementById(`visuales`);
const travesia = document.getElementById(`travesia`);
const conclusiones = document.getElementById(`conclusiones`);
const formulario = document.getElementById(`formulario`);
const fondo = document.getElementById('fondo');
const navbar = document.getElementById('myTopnav');
const footer = document.getElementById('footer');
const navbarLink = document.querySelector('.link');
const linkPrincipal = document.getElementById('linkPrincipal');
const linkLore = document.getElementById('linkLore');
const linkVisuales = document.getElementById('linkVisuales');
const linkTravesia = document.getElementById('linkTravesia');
const linkConclusiones = document.getElementById('linkConclusiones');
const linkFormulario = document.getElementById('linkFormulario');
const agua = document.getElementById('agua');
const aire = document.getElementById('aire');
const fuego = document.getElementById('fuego');
const tierra = document.getElementById('tierra');
const lores = [document.querySelector('.elemento-agua'), document.querySelector('.elemento-aire'), document.querySelector('.elemento-fuego'), document.querySelector('.elemento-tierra')];
const fondos = ['url(IMG/fondos/fondo-agua.webp)', 'url(IMG/fondos/fondo-aire.webp)',
  'url(IMG/fondos/fondo-fuego.webp)', 'url(IMG/fondos/fondo-tierra.webp)'];


  // AGUA
agua.addEventListener('click', () => {
  fondo.style.backgroundImage = fondos[0];
  fondo.style.transition = '.5s ease all';

  navbar.style.backgroundColor = '#00608d';
  navbar.style.transition = '.5s ease all';
  footer.style.backgroundColor = '#00608d';
  footer.style.transition = '.5s ease all';

  principal.style.backgroundColor = `rgba(30, 14, 173, 0.348)`;
  principal.style.boxShadow = `0px 5px 10px #000068`;
  principal.style.transition = '.5s ease all';
  lore.style.backgroundColor = `rgba(30, 14, 173, 0.348)`;
  lore.style.boxShadow = `0px 5px 10px #000068`;
  lore.style.transition = '.5s ease all';
  visuales.style.backgroundColor = `rgba(30, 14, 173, 0.348)`;
  visuales.style.boxShadow = `0px 5px 10px #000068`;
  visuales.style.transition = '.5s ease all';
  travesia.style.backgroundColor = `rgba(30, 14, 173, 0.348)`;
  travesia.style.boxShadow = `0px 5px 10px #000068`;
  travesia.style.transition = '.5s ease all';
  conclusiones.style.backgroundColor = `rgba(30, 14, 173, 0.348)`;
  conclusiones.style.boxShadow = `0px 5px 10px #000068`;
  conclusiones.style.transition = '.5s ease all';
  formulario.style.backgroundColor = `rgba(30, 14, 173, 0.348)`;
  formulario.style.boxShadow = `0px 5px 10px #000068`;
  formulario.style.transition = '.5s ease all';
  
  linkPrincipal.style.backgroundColor = '#00608d';
  linkPrincipal.style.color = '#ffffff';
  linkPrincipal.style.transition = '.5s ease all';
  linkLore.style.backgroundColor = '#00608d';
  linkLore.style.color = '#ffffff';
  linkLore.style.transition = '.5s ease all';
  linkVisuales.style.backgroundColor = '#00608d';
  linkVisuales.style.color = '#ffffff';
  linkVisuales.style.transition = '.5s ease all';
  linkTravesia.style.backgroundColor = '#00608d';
  linkTravesia.style.color = '#ffffff';
  linkTravesia.style.transition = '.5s ease all';
  linkConclusiones.style.backgroundColor = '#00608d';
  linkConclusiones.style.color = '#ffffff';
  linkConclusiones.style.transition = '.5s ease all';
  linkFormulario.style.backgroundColor = '#00608d';
  linkFormulario.style.color = '#ffffff';
  linkFormulario.style.transition = '.5s ease all';

    // DISPLAY LORE
  lores[0].style.display = 'flex';
  lores[1].style.display = 'none';
  lores[2].style.display = 'none';
  lores[3].style.display = 'none';



  
  linkPrincipal.addEventListener('mouseover', () => {
    linkPrincipal.style.backgroundColor = 'rgb(140, 186, 255)';
    linkPrincipal.style.color = '#00608d';
  });
    linkLore.addEventListener('mouseover', () => {
    linkLore.style.backgroundColor = 'rgb(140, 186, 255)';
    linkLore.style.color = '#00608d';
  });
    linkVisuales.addEventListener('mouseover', () => {
    linkVisuales.style.backgroundColor = 'rgb(140, 186, 255)';
    linkVisuales.style.color = '#00608d';
  });
    linkTravesia.addEventListener('mouseover', () => {
    linkTravesia.style.backgroundColor = 'rgb(140, 186, 255)';
    linkTravesia.style.color = '#00608d';
  });
    linkConclusiones.addEventListener('mouseover', () => {
    linkConclusiones.style.backgroundColor = 'rgb(140, 186, 255)';
    linkConclusiones.style.color = '#00608d';
  });
    linkFormulario.addEventListener('mouseover', () => {
    linkFormulario.style.backgroundColor = 'rgb(140, 186, 255)';
    linkFormulario.style.color = '#00608d';
  });
  linkPrincipal.addEventListener('mouseout', () => {
    linkPrincipal.style.backgroundColor = '#00608d';
    linkPrincipal.style.color = '#ffffff';
  });
  linkLore.addEventListener('mouseout', () => {
    linkLore.style.backgroundColor = '#00608d';
    linkLore.style.color = '#ffffff';
  });
  linkVisuales.addEventListener('mouseout', () => {
    linkVisuales.style.backgroundColor = '#00608d';
    linkVisuales.style.color = '#ffffff';
  });
  linkTravesia.addEventListener('mouseout', () => {
    linkTravesia.style.backgroundColor = '#00608d';
    linkTravesia.style.color = '#ffffff';
  });
  linkConclusiones.addEventListener('mouseout', () => {
    linkConclusiones.style.backgroundColor = '#00608d';
    linkConclusiones.style.color = '#ffffff';
  });
  linkFormulario.addEventListener('mouseout', () => {
    linkFormulario.style.backgroundColor = '#00608d';
    linkFormulario.style.color = '#ffffff';
  });
});


// AIRE
aire.addEventListener('click', () => {
  fondo.style.backgroundImage = fondos[1];
  fondo.style.transition = '.5s ease all';

  navbar.style.backgroundColor = '#c17504';
  navbar.style.transition = '.5s ease all';
  footer.style.backgroundColor = '#c17504';
  footer.style.transition = '.5s ease all';

  principal.style.backgroundColor = `rgba(254, 165, 23, 0.348)`;
  principal.style.boxShadow = `0px 5px 10px #975b01`;
  principal.style.transition = '.5s ease all';
  lore.style.backgroundColor = `rgba(254, 165, 23, 0.348)`;
  lore.style.boxShadow = `0px 5px 10px #975b01`;
  lore.style.transition = '.5s ease all';
  visuales.style.backgroundColor = `rgba(254, 165, 23, 0.348)`;
  visuales.style.boxShadow = `0px 5px 10px #975b01`;
  visuales.style.transition = '.5s ease all';
  travesia.style.backgroundColor = `rgba(254, 165, 23, 0.348)`;
  travesia.style.boxShadow = `0px 5px 10px #975b01`;
  travesia.style.transition = '.5s ease all';
  conclusiones.style.backgroundColor = `rgba(254, 165, 23, 0.348)`;  
  conclusiones.style.boxShadow = `0px 5px 10px #975b01`;  
  conclusiones.style.transition = '.5s ease all';
  formulario.style.backgroundColor = `rgba(254, 165, 23, 0.348)`;  
  formulario.style.boxShadow = `0px 5px 10px #975b01`;  
  formulario.style.transition = '.5s ease all';
  
  linkPrincipal.style.backgroundColor = '#c17504';
  linkPrincipal.style.color = '#ffffff';
  linkPrincipal.style.transition = '.5s ease all';
  linkLore.style.backgroundColor = '#c17504';
  linkLore.style.color = '#ffffff';
  linkLore.style.transition = '.5s ease all';
  linkVisuales.style.backgroundColor = '#c17504';
  linkVisuales.style.color = '#ffffff';
  linkVisuales.style.transition = '.5s ease all';
  linkTravesia.style.backgroundColor = '#c17504';
  linkTravesia.style.color = '#ffffff';
  linkTravesia.style.transition = '.5s ease all';
  linkConclusiones.style.backgroundColor = '#c17504';
  linkConclusiones.style.color = '#ffffff';
  linkConclusiones.style.transition = '.5s ease all';
  linkFormulario.style.backgroundColor = '#c17504';
  linkFormulario.style.color = '#ffffff';
  linkFormulario.style.transition = '.5s ease all';

    // DISPLAY LORE
    lores[0].style.display = 'none';
    lores[1].style.display = 'flex';
    lores[2].style.display = 'none';
    lores[3].style.display = 'none';

    
  linkPrincipal.addEventListener('mouseover', () => {
    linkPrincipal.style.backgroundColor = 'rgb(255, 242, 199)';
    linkPrincipal.style.color = '#c17504';
  });
    linkLore.addEventListener('mouseover', () => {
    linkLore.style.backgroundColor = 'rgb(255, 242, 199)';
    linkLore.style.color = '#c17504';
  });
    linkVisuales.addEventListener('mouseover', () => {
    linkVisuales.style.backgroundColor = 'rgb(255, 242, 199)';
    linkVisuales.style.color = '#c17504';
  });
    linkTravesia.addEventListener('mouseover', () => {
    linkTravesia.style.backgroundColor = 'rgb(255, 242, 199)';
    linkTravesia.style.color = '#c17504';
  });
    linkConclusiones.addEventListener('mouseover', () => {
    linkConclusiones.style.backgroundColor = 'rgb(255, 242, 199)';
    linkConclusiones.style.color = '#c17504';
  });
    linkFormulario.addEventListener('mouseover', () => {
    linkFormulario.style.backgroundColor = 'rgb(255, 242, 199)';
    linkFormulario.style.color = '#c17504';
  });
  linkPrincipal.addEventListener('mouseout', () => {
    linkPrincipal.style.backgroundColor = '#c17504';
    linkPrincipal.style.color = '#ffffff';
  });
  linkLore.addEventListener('mouseout', () => {
    linkLore.style.backgroundColor = '#c17504';
    linkLore.style.color = '#ffffff';
  });
  linkVisuales.addEventListener('mouseout', () => {
    linkVisuales.style.backgroundColor = '#c17504';
    linkVisuales.style.color = '#ffffff';
  });
  linkTravesia.addEventListener('mouseout', () => {
    linkTravesia.style.backgroundColor = '#c17504';
    linkTravesia.style.color = '#ffffff';
  });
  linkConclusiones.addEventListener('mouseout', () => {
    linkConclusiones.style.backgroundColor = '#c17504';
    linkConclusiones.style.color = '#ffffff';
  });
  linkFormulario.addEventListener('mouseout', () => {
    linkFormulario.style.backgroundColor = '#c17504';
    linkFormulario.style.color = '#ffffff';
  });
});

// FUEGO
fuego.addEventListener('click', () => {
  fondo.style.backgroundImage = fondos[2];
  fondo.style.transition = '.5s ease all';

  navbar.style.backgroundColor = '#a52900';
  navbar.style.transition = '.5s ease all';
  footer.style.backgroundColor = '#a52900';
  footer.style.transition = '.5s ease all';

  principal.style.backgroundColor = `rgba(164, 47, 14, 0.348)`;
  principal.style.boxShadow = `0px 5px 10px #501100`;
  principal.style.transition = '.5s ease all';
  lore.style.backgroundColor = `rgba(164, 47, 14, 0.348)`;
  lore.style.boxShadow = `0px 5px 10px #501100`;
  lore.style.transition = '.5s ease all';
  visuales.style.backgroundColor = `rgba(164, 47, 14, 0.348)`;
  visuales.style.boxShadow = `0px 5px 10px #501100`;
  visuales.style.transition = '.5s ease all';
  travesia.style.backgroundColor = `rgba(164, 47, 14, 0.348)`;
  travesia.style.boxShadow = `0px 5px 10px #501100`;
  travesia.style.transition = '.5s ease all';
  conclusiones.style.backgroundColor = `rgba(164, 47, 14, 0.348)`;  
  conclusiones.style.boxShadow = `0px 5px 10px #501100`;  
  conclusiones.style.transition = '.5s ease all'; 
  formulario.style.backgroundColor = `rgba(164, 47, 14, 0.348)`;  
  formulario.style.boxShadow = `0px 5px 10px #501100`;  
  formulario.style.transition = '.5s ease all'; 

  linkPrincipal.style.backgroundColor = '#a52900';
  linkPrincipal.style.color = '#ffffff';
  linkPrincipal.style.transition = '.5s ease all';
  linkLore.style.backgroundColor = '#a52900';
  linkLore.style.color = '#ffffff';
  linkLore.style.transition = '.5s ease all';
  linkVisuales.style.backgroundColor = '#a52900';
  linkVisuales.style.color = '#ffffff';
  linkVisuales.style.transition = '.5s ease all';
  linkTravesia.style.backgroundColor = '#a52900';
  linkTravesia.style.color = '#ffffff';
  linkTravesia.style.transition = '.5s ease all';
  linkConclusiones.style.backgroundColor = '#a52900';
  linkConclusiones.style.color = '#ffffff';
  linkConclusiones.style.transition = '.5s ease all';
  linkFormulario.style.backgroundColor = '#a52900';
  linkFormulario.style.color = '#ffffff';
  linkFormulario.style.transition = '.5s ease all';

    // DISPLAY LORE
    lores[0].style.display = 'none';
    lores[1].style.display = 'none';
    lores[2].style.display = 'flex';
    lores[3].style.display = 'none';

  linkPrincipal.addEventListener('mouseover', () => {
    linkPrincipal.style.backgroundColor = 'rgb(255, 179, 124)';
    linkPrincipal.style.color = '#a52900';
  });
    linkLore.addEventListener('mouseover', () => {
    linkLore.style.backgroundColor = 'rgb(255, 179, 124)';
    linkLore.style.color = '#a52900';
  });
    linkVisuales.addEventListener('mouseover', () => {
    linkVisuales.style.backgroundColor = 'rgb(255, 179, 124)';
    linkVisuales.style.color = '#a52900';
  });
    linkTravesia.addEventListener('mouseover', () => {
    linkTravesia.style.backgroundColor = 'rgb(255, 179, 124)';
    linkTravesia.style.color = '#a52900';
  });
    linkConclusiones.addEventListener('mouseover', () => {
    linkConclusiones.style.backgroundColor = 'rgb(255, 179, 124)';
    linkConclusiones.style.color = '#a52900';
  });
    linkFormulario.addEventListener('mouseover', () => {
    linkFormulario.style.backgroundColor = 'rgb(255, 179, 124)';
    linkFormulario.style.color = '#a52900';
  });
  linkPrincipal.addEventListener('mouseout', () => {
    linkPrincipal.style.backgroundColor = '#a52900';
    linkPrincipal.style.color = '#ffffff';
  });
  linkLore.addEventListener('mouseout', () => {
    linkLore.style.backgroundColor = '#a52900';
    linkLore.style.color = '#ffffff';
  });
  linkVisuales.addEventListener('mouseout', () => {
    linkVisuales.style.backgroundColor = '#a52900';
    linkVisuales.style.color = '#ffffff';
  });
  linkTravesia.addEventListener('mouseout', () => {
    linkTravesia.style.backgroundColor = '#a52900';
    linkTravesia.style.color = '#ffffff';
  });
  linkConclusiones.addEventListener('mouseout', () => {
    linkConclusiones.style.backgroundColor = '#a52900';
    linkConclusiones.style.color = '#ffffff';
  });
  linkFormulario.addEventListener('mouseout', () => {
    linkFormulario.style.backgroundColor = '#a52900';
    linkFormulario.style.color = '#ffffff';
  });
});


// TIERRA
tierra.addEventListener('click', () => {
  fondo.style.backgroundImage = fondos[3];
  fondo.style.transition = '.5s ease all';

  navbar.style.backgroundColor = '#007e08';
  navbar.style.transition = '.5s ease all';
  footer.style.backgroundColor = '#007e08';
  footer.style.transition = '.5s ease all';

  principal.style.backgroundColor = `rgba(37, 154, 13, 0.348)`;
  principal.style.boxShadow = `0px 5px 10px #00500b`;
  principal.style.transition = '.5s ease all';
  lore.style.backgroundColor = `rgba(37, 154, 13, 0.348)`;
  lore.style.boxShadow = `0px 5px 10px #00500b`;
  lore.style.transition = '.5s ease all';
  visuales.style.backgroundColor = `rgba(37, 154, 13, 0.348)`;
  visuales.style.boxShadow = `0px 5px 10px #00500b`;
  visuales.style.transition = '.5s ease all';
  travesia.style.backgroundColor = `rgba(37, 154, 13, 0.348)`;
  travesia.style.boxShadow = `0px 5px 10px #00500b`;
  travesia.style.transition = '.5s ease all';
  conclusiones.style.backgroundColor = `rgba(37, 154, 13, 0.348)`; 
  conclusiones.style.boxShadow = `0px 5px 10px #00500b`; 
  conclusiones.style.transition = '.5s ease all';
  formulario.style.backgroundColor = `rgba(37, 154, 13, 0.348)`; 
  formulario.style.boxShadow = `0px 5px 10px #00500b`; 
  formulario.style.transition = '.5s ease all';

  linkPrincipal.style.backgroundColor = '#007e08';
  linkPrincipal.style.color = '#ffffff';
  linkPrincipal.style.transition = '.5s ease all';
  linkLore.style.backgroundColor = '#007e08';
  linkLore.style.color = '#ffffff';
  linkLore.style.transition = '.5s ease all';
  linkVisuales.style.backgroundColor = '#007e08';
  linkVisuales.style.color = '#ffffff';
  linkVisuales.style.transition = '.5s ease all';
  linkTravesia.style.backgroundColor = '#007e08';
  linkTravesia.style.color = '#ffffff';
  linkTravesia.style.transition = '.5s ease all';
  linkConclusiones.style.backgroundColor = '#007e08';
  linkConclusiones.style.color = '#ffffff';
  linkConclusiones.style.transition = '.5s ease all';
  linkFormulario.style.backgroundColor = '#007e08';
  linkFormulario.style.color = '#ffffff';
  linkFormulario.style.transition = '.5s ease all';

  // DISPLAY LORE
  lores[0].style.display = 'none';
  lores[1].style.display = 'none';
  lores[2].style.display = 'none';
  lores[3].style.display = 'flex';
  


  linkPrincipal.addEventListener('mouseover', () => {
    linkPrincipal.style.backgroundColor = 'rgb(167, 255, 140)';
    linkPrincipal.style.color = '#007e08';
  });
    linkLore.addEventListener('mouseover', () => {
    linkLore.style.backgroundColor = 'rgb(167, 255, 140)';
    linkLore.style.color = '#007e08';
  });
    linkVisuales.addEventListener('mouseover', () => {
    linkVisuales.style.backgroundColor = 'rgb(167, 255, 140)';
    linkVisuales.style.color = '#007e08';
  });
    linkTravesia.addEventListener('mouseover', () => {
    linkTravesia.style.backgroundColor = 'rgb(167, 255, 140)';
    linkTravesia.style.color = '#007e08';
  });
    linkConclusiones.addEventListener('mouseover', () => {
    linkConclusiones.style.backgroundColor = 'rgb(167, 255, 140)';
    linkConclusiones.style.color = '#007e08';
  });
    linkFormulario.addEventListener('mouseover', () => {
    linkFormulario.style.backgroundColor = 'rgb(167, 255, 140)';
    linkFormulario.style.color = '#007e08';
  });
  linkPrincipal.addEventListener('mouseout', () => {
    linkPrincipal.style.backgroundColor = '#007e08';
    linkPrincipal.style.color = '#ffffff';
  });
  linkLore.addEventListener('mouseout', () => {
    linkLore.style.backgroundColor = '#007e08';
    linkLore.style.color = '#ffffff';
  });
  linkVisuales.addEventListener('mouseout', () => {
    linkVisuales.style.backgroundColor = '#007e08';
    linkVisuales.style.color = '#ffffff';
  });
  linkTravesia.addEventListener('mouseout', () => {
    linkTravesia.style.backgroundColor = '#007e08';
    linkTravesia.style.color = '#ffffff';
  });
  linkConclusiones.addEventListener('mouseout', () => {
    linkConclusiones.style.backgroundColor = '#007e08';
    linkConclusiones.style.color = '#ffffff';
  });
  linkFormulario.addEventListener('mouseout', () => {
    linkFormulario.style.backgroundColor = '#007e08';
    linkFormulario.style.color = '#ffffff';
  });
});






