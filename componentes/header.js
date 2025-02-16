


function loadHeader(el){
    const divcarga = document.createElement("div");
    divcarga.innerHTML = `<div class="header-contenedor">
                <a href="index.html">
      <img class="img" src="img/Captura_de_pantalla_2025-02-15_224016-removebg-preview.png" alt="">
                </a>
                <div class="contenedor-options">
                    <a class="option_header" href="contacto.html">
                        <p class="parrafo-header">Contacto</p>
                    </a>
                    <a class="option_header" href="servicios.html"> 
                        <p class="parrafo-header">Servicios</p>
                    </a>
                    <a class="option_header" href="portfolio.html"> 
                        <p class="parrafo-header">Portfolio</p>
                    </a>
                </div>
                <button class="abre_ventana"><i class="fa-solid fa-bars fa-3x icon" style="color: #f2f2f2;"></i></button>
            </div>
            <div class="ventana">
                <div class="ventana_contenedor_button">
                    <button class="ventana__cerrar_ventana_button"><i class="fa-solid fa-x fa-3x" style="color: #ffffff;"></i></button>
                    
                </div>
                <div class="options">
                    <a class="link" href="contacto.html">
                        <p class="texto_contenido"> <span><i class="fa-solid fa-user fa-1x i" style="color: #f5f7fa;"></i></span>Contacto</p>
                    </a>
                    <a class="link" href="portfolio.html">
                        <p class="texto_contenido"><span><i class="fa-solid fa-address-book i" style="color: #ffffff;"></i></span>Portfolio</p>
                    </a>
                    <a class="link" href="servicios.html">
                        <p class="texto_contenido"><span><i class="fa-solid fa-briefcase i" style="color: #f0f2f4;"></i></span>Servicios</p>
                    </a>
                </div>
            </div>`;

   
     el.appendChild(divcarga);
     
     
    }
    
    
function scroll() {
       
           
           const header = document.querySelector("header");
           
           // Manejo del scroll
           window.addEventListener("scroll", () => {
               const scrolled = 'scrolled';
               if (window.scrollY > 50) {
                   header.classList.add(scrolled);
               } else {
                   header.classList.remove(scrolled);
               }
           });
       }

