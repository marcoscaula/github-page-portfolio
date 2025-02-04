
function abrirMenuBtn(){
    const abrirBtnEL = document.querySelector(".abre_ventana");
    const ventanaEL = document.querySelector(".ventana");
    
    abrirBtnEL.addEventListener("click", () => {
        ventanaEL.style.visibility = "visible";
        ventanaEL.style.display = "block"; 
        setTimeout(() => {
            ventanaEL.style.opacity = "1"; 
        }, 10); 
    });

    const cerraVentanaBtn = document.querySelector(".ventana__cerrar_ventana_button");
    cerraVentanaBtn.addEventListener("click", () => {
        ventanaEL.style.opacity = "0"; 
        setTimeout(() => {
            ventanaEL.style.visibility = "hidden"; 
            ventanaEL.style.display = "none"; 
        }, 500); 
    });

}




function main() {
    document.addEventListener("DOMContentLoaded", () => {

        loadHeader(document.querySelector(".header"));
        abrirMenuBtn();
        addBienvenida(getBienvenida());
        addPresentacion(getPresentacion())
        addCardContent(getCardsContent());
        loadContact(document.querySelector(".contacto"));
        loadFooter(document.querySelector(".footer"));
    })
    
}

main();