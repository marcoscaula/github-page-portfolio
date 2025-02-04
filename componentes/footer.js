



function loadFooter(el){
    const divcarga = document.createElement("div");
    divcarga.innerHTML = `<div class="contenedor-footer">
            <div class="footer-cont-img">
                <a href="index.html"><img src="img/Marcos CAula.png" width="200px" height="200px" alt=""></a>
            </div>
            <div class="footer-links">
                <a class="link-footer" href="index.html"><i class="fa-solid fa-house icon" style="color: #ffffff;"></i> Home</a>
                <a class="link-footer" href="servicios.html"><i class="fa-solid fa-user icon" style="color: #ffffff;"></i>Servicios</a>
                <a class="link-footer" href="contacto.html"><i class="fa-solid fa-phone icon" style="color: #fcfcfd;"></i>Contacto</a>
            </div>
            <div class="social-links">
                <a class="social-link" href="https://github.com/marcoscaula" target="_blank"><i class="fa-brands fa-github fa-2x" style="color: white;"></i></a>
                <a class="social-link" href="https://www.linkedin.com/in/marcos-caula-a073b8304/" target="_blank"><i class="fa-brands fa-linkedin fa-2x" style="color: white;"></i></a>
                <a class="social-link" href="" target="_blank"><i class="fa-brands fa-instagram fa-2x" style="color: #f7f9fc;"></i></a>
                
            </div>
            <p class="parrafo-footer">@2025 - Marcos Caula - Apx.school</p>
        </div>`;

        el.appendChild(divcarga);
}