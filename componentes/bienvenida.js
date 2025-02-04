function getBienvenida() {
    
    return fetch("https://cdn.contentful.com/spaces/7cjsovrzk05x/environments/master/entries?access_token=55bhwkSWbPM5aSRyUnuNvD24kqA7DSF-RvCccpcdULg&content_type=bienvenida")
       .then((res) => {
           if (!res.ok) {
               throw new Error("La API no responde");
           }
           return res.json();
       })
       .then((json) => {
           // console.log(json);
          return {
           imagenUno: json.items[0].fields.imagenCohete,
          }; 
       });  
}
function addBienvenida(params = {}){
    const bienvenidTemplate = document.querySelector("#bienvenida__template");
    const bienvenidaCont = document.querySelector(".bienvenida__content");
    params.then((data) => {
        const clone = document.importNode(bienvenidTemplate.content,true);
       const imagenUno = clone.querySelector(".bienvenida_img-uno");
       imagenUno.src = data.imagenUno;
       bienvenidaCont.appendChild(clone);
    })
}