const publicarBtn = document.getElementById('publicarBtn');
const username = document.getElementById('username');
const mensaje = document.getElementById('mensaje');
const mensajesContainer = document.getElementById('mensajesContainer');
const database = firebase.database();

const publicar = () => {

    if(username.value == '' || mensaje == ''){
        alert('Falta un campo por llenar');
        return;
    }

    let publicacion = {

        user: username.value,
        message: mensaje.value,

    };

    database.ref('publicaciones/').push().set(publicacion);

    username.value = '';
    mensaje.value = '';

}

database.ref('publicaciones/').on('value', function(data){

    data.forEach(
        publicacion => {
            let valor = publicacion.val();
            console.log(valor.message);
            let fila = new Publicacion(valor);
            mensajesContainer.appendChild(fila.render());
        
    });

});



publicarBtn.addEventListener('click', publicar);