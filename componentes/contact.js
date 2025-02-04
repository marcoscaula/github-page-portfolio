


function loadContact(el){
    const divcarga = document.createElement("div");

    divcarga.innerHTML = `<div class="contenedor-contacto">
            <h3 class="texto-form">Escribime</h3>
            
            <form action="" class="contact-form">
                    <div class="group">
                        <div class="input-group">
                            <label class="label-form" for="nombre">Nombre</label>
                            <input id="nombre" name="nombre" class="inp-nombre input" type="text" placeholder="Ingrese su nombre">

                        </div>
                        <div class="input-group">
                            <label class="label-form" for="email">Email</label>
                            <input id="email" class="inp-email input" name="email" type="text" placeholder="ingresa tu email">    
                        </div>

                    </div>
                
               
                
                <label class="label-form" for="mensaje" >Mensaje</label>
                <textarea class="input txtarea" name="mensaje" id="mensaje" placeholder="escribi tu mensaje aqui"></textarea>
                <button type="submit" class="btn-submit">
                    Enviar
                    <i class="fa-solid fa-check fa-right fa-1x check" style="color: #f7f7f7;"></i>
                </button>
                <div id="message" style="display: none; margin-top: 20px; color: greenyellow;"></div>
            </form>
        </div>`
        el.appendChild(divcarga);


        const formEl = document.querySelector(".contact-form");
    const messageEl = document.getElementById("message");
    
    formEl.addEventListener("submit", (event) => {
        event.preventDefault();


        const nombre = document.querySelector(".inp-nombre").value;
        const email = document.querySelector(".inp-email").value;
        const mensaje = document.querySelector(".txtarea").value;
        // console.log(nombre,email,mensaje);
        const url = 'https://apx.school/api/utils/email-to-student';
        fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to: 'marcos.caula@outlook.com',
                message: `hola soy ${nombre} mi email es ${email} te queria decir  ${mensaje}`,
            }),
        })
        .then(response => {
            if(!response){
                throw new Error('error de la red');
            } 
            return response.json();
        })
        .then(data => {
            console.log('exito', data);
            formEl.reset();
            messageEl.textContent = "Mensaje Enviado con Exito!!";
            messageEl.style.display = "block";
            messageEl.style.color = "green";
            
        })
        .catch((error) => {
            console.error('Error', error);
            
        }
        )
    })
        
}
