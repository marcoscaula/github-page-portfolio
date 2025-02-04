

function getCardsContent() {
    return fetch("https://preview.contentful.com/spaces/7cjsovrzk05x/environments/master/entries?access_token=HAeocWkmlDHoXr0guGAFXK_xMitLcDLTDnJZrnt9bUg&content_type=servicios")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        const collectionImagenes = data.includes.Asset;

        // Crear un objeto para almacenar las imágenes
        const imagenes = {};
        collectionImagenes.forEach((item, index) => {
            imagenes[`img${index + 1}`] = "https:" + item.fields.file.url;
        });

        const collectionTexto = data.items;
        
        // Combinar texto e imágenes en un solo objeto
        const servicios = collectionTexto.map(element => {
            return {
                ...imagenes, // Agrega las imágenes al objeto
                titlecardUno: element.fields.tituloservice,
                titlecardDos: element.fields.tituloservicedos,
                titlecardTres: element.fields.tituloservicetres,
                descriptionUno: element.fields.descripcionservicio,
                descriptionDos: element.fields.descripcionserviciodos,
                descriptionTres: element.fields.descripcionserviciotres,
            };
        });

        // Retornar un solo objeto combinando todos los servicios
        const resultadoFinal = Object.assign({}, ...servicios);
        // console.log(resultadoFinal);
        
        return resultadoFinal;
        
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

function addCardContent(params = {}) {
    const templateCardContent = document.querySelector("#card_template");
    const contenedor = document.querySelector(".services");
    contenedor.innerHTML = ''; 

    
    params.then(data => {
        
        for (let i = 0; i < 3; i++) { 
            const cardClone = templateCardContent.content.cloneNode(true);
            const card = cardClone.querySelector('.services__card');

            
            card.querySelector('.services-img__card').src = data[`img${i + 1}`];

            
            if (i === 0) {
                card.querySelector('.services-title__card').textContent = data.titlecardUno;
                card.querySelector('.services-description__card').textContent = data.descriptionUno;
            } else if (i === 1) {
                card.querySelector('.services-title__card').textContent = data.titlecardDos;
                card.querySelector('.services-description__card').textContent = data.descriptionDos;
            } else if (i === 2) {
                card.querySelector('.services-title__card').textContent = data.titlecardTres;
                card.querySelector('.services-description__card').textContent = data.descriptionTres;
            }

            contenedor.appendChild(cardClone); 
        }
    });
}