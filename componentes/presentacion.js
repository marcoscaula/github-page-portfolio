function addPresentacion(params = {}){
    const template = document.querySelector("#presentacion__template");
    const presentacionCont = document.querySelector(".presentacion__content");
    params.then((data) =>{
        data.forEach(item => {
            // console.log(item);
            
            const clone = document.importNode(template.content, true);
            const imgmia = clone.querySelector(".img-presentacion");
            const nombre = clone.querySelector(".presentacion__nombre");
            const descripcion = clone.querySelector(".parrafo-text");
            imgmia.src = "https:" + item.img;
            nombre.textContent = item.nombre;
            descripcion.textContent = item.carta;
            presentacionCont.appendChild(clone);
        });  
    });
}
function getPresentacion(){
    return fetch("https://preview.contentful.com/spaces/7cjsovrzk05x/environments/master/entries?access_token=HAeocWkmlDHoXr0guGAFXK_xMitLcDLTDnJZrnt9bUg&content_type=presentacion")
    .then((res) => {
        return res.json();
        
    })
    .then((data) => {
        // console.log(data);
        const imagenmia = data.includes.Asset[0].fields.file.url;
        
        
        // console.log(data.items);
        return data.items.map((i) => {
            // console.log(i.fields);
            // console.log(i);
            
           const datosPresentacion = {
            nombre: i.fields.nombretexto,
            carta: i.fields.txtpresentacion,
            img: imagenmia
           }
           
            return datosPresentacion;
        })
        
        
    })
}