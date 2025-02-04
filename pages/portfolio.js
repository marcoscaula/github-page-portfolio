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
function getimagenes(){

    const images = {};
    
    return fetch("https://cdn.contentful.com/spaces/7cjsovrzk05x/environments/master/entries?access_token=hrLvTVG0W7VdK_ZXTiSC3rasnmhWlAXid11ckn5fxkE&content_type=works")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const fieldCollection = data.includes;
        
        // Iterate through the assets and store URLs in the images object
        fieldCollection.Asset.forEach(element => {
            const fileName = element.fields.fileName; // Extract file name
            const imageUrl = "https:" + element.fields.file.url; // Construct full URL
            
            
            images[element.fields.title] = imageUrl;
        });
        
        return images;
        
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}
    
function addimagenes(imagenes) {
    const template = document.querySelector("#imagenes-container-template");
    const contenedor = document.querySelector(".contenedor-maletin");
    contenedor.innerHTML = ''; // Clear existing content

    imagenes.then(response => {
        const clone = document.importNode(template.content,true);
        clone.querySelector(".maletin").src = response.imgmaletin || '';
        clone.querySelector(".sombra").src = response.imgsombra || '';
        
        
        contenedor.appendChild(clone);
    });
}


function getContentCard(){
    return fetch("https://cdn.contentful.com/spaces/7cjsovrzk05x/environments/master/entries?access_token=hrLvTVG0W7VdK_ZXTiSC3rasnmhWlAXid11ckn5fxkE&content_type=trabajos")
    .then((res) => {
        return res.json();
        
    })
    .then((data) => {

        const items = data.items.map(item => {
            return {
                titulo: item.fields.titulo,
                descripcion: item.fields.descripcion,
                urlimg: item.fields.urlimg
            }
            
        })
        return items;
        



    });
        
}

function addContent(params = {}){
    const cardTemplate = document.querySelector("#card_template");
    const cardClone = cardTemplate.content.cloneNode(true);

    const img = cardClone.querySelector(".services-img__card");
    const title = cardClone.querySelector(".services-title__card");
    const descripcion = cardClone.querySelector(".services-description__card");
    img.src = params.urlimg;
    title.textContent = params.titulo;
    descripcion.textContent = params.descripcion;
    const container = document.querySelector(".services");
    container.appendChild(cardClone);

}














function main(){
    loadHeader(document.querySelector(".header"));
    abrirMenuBtn();
    addimagenes(getimagenes());

    getContentCard();
    
     getContentCard().then(function(works) {
         for (const w of works) {
             addContent(w);
         }
        
     })
    loadFooter(document.querySelector(".footer"));
   
    // https://cdn.contentful.com/spaces/7cjsovrzk05x/environments/master/entries?access_token=hrLvTVG0W7VdK_ZXTiSC3rasnmhWlAXid11ckn5fxkE&content_type=trabajos
}
main();