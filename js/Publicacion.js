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

        let respuestaCont = document.createElement('input');
        respuestaCont.innerHTML = "Escribe tu publicación";

        component.appendChild(userCont);
        component.appendChild(messageCont);
            
            return component;
    }

}