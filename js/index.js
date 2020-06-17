//declarar variables para vincular objetos de formulario
const usuario = document.getElementById('user');
const password = document.getElementById('pass');
const formulario = document.getElementById('formLogin');

//generando eventos 
formulario.addEventListener('submit', login);

//funciones a ejecutar
function login(e){
    e.preventDefault();
    
    let usuarioVal = usuario.value;
    let passwordVal = password.value;

    if(usuarioVal == '' || passwordVal == ''){
        creaMensaje('Verifica tus campos', 'danger');
        return;
    }

    if(localStorage.getItem('usuario')){
        let objetos = JSON.parse(localStorage.getItem('usuario'));

        if ( usuarioVal == objetos.user && passwordVal == objetos.pass ){
            creaMensaje('Login correcto', 'success');
            localStorage.setItem('sesion', 'Activa');
            setTimeout(function(){
                window.open('./inicio.html', '_self');
            },2000);
        } else {
            creaMensaje('Usuario Incorrecto', 'danger');
        }
    } else {
        creaMensaje('No hay registros', 'danger');  
    }

}