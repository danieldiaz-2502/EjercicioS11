class Publicacion{
    constructor(publicacion){
        this.publicacion = publicacion;

    }

    render = () => {
        let component = document.createElement('div');
        let userCont = document.createElement('div');
        component.className = 'publicCont';

        userCont.innerHTML = (

            '<p>'+'<h3>'+'@'+this.publicacion.user+' ha comentado:'+'</h3>'+'</p>'
            );

        let messageCont = document.createElement('div');
        messageCont.innerHTML = this.publicacion.message;

        let responderCont = document.createElement('div')
        responderCont.className = 'responderCont';


        let respuestaInput = document.createElement('input');
        respuestaInput.className = 'respuestaInput';

        let responderBtn = document.createElement('button');
        responderBtn.className = 'responderBtn';
        responderBtn.innerHTML = ('Responder');

        let comentariosCont = document.createElement('div')
        comentariosCont.className = 'comentariosCont';

        responderBtn.addEventListener('click', () => {
            const publicdb = firebase.database();
            let texto = respuestaInput.value;
            console.log(texto);
            let id = publicdb.ref('publicaciones/'+this.publicacion.id+'/respuestas').push().key;

            let comentario = {
                id: id,
                texto: texto,
            }
            publicdb.ref('publicaciones/'+this.publicacion.id+'/respuestas/'+id).set(comentario);
            this.publicacion.innerHTML = (

                '<p>'+'<h3>'+'@'+texto+' ha comentado:'+'</h3>'+'</p>'
                );

        });
        

        component.appendChild(userCont);
        component.appendChild(messageCont);
        component.appendChild(responderCont);
        component.appendChild(comentariosCont);
        responderCont.appendChild(respuestaInput);
        responderCont.appendChild(responderBtn);

            
            return component;
    }

}