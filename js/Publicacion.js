class Publicacion{
    constructor(publicacion){
        this.publicacion = publicacion;

    }

    render = () => {
        let component = document.createElement('div');
        let userCont = document.createElement('div');
        component.className = 'publicCont';

        userCont.innerHTML = (

            '<p>'+'<h3>'+this.publicacion.user+'</h3>'+'</p>'
            );

        let messageCont = document.createElement('div');
        messageCont.innerHTML = this.publicacion.message;

        component.appendChild(userCont);
        component.appendChild(messageCont);
            
            return component;
    }

}