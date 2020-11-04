
    function muestra_ocultaGrid(id){
        if (document.getElementById){ //se obtiene el id
        var verElemento = document.getElementById(id); //se define la variable "el" igual a nuestro div
        verElemento.style.display = (verElemento.style.display == 'grid') ? 'none' : 'grid'; //damos un atributo display:none que oculta el div
        }
        }
        // muestra_oculta('aboutMeDetails');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */



    function muestra_ocultaBlock(id){
        if (document.getElementById){ //se obtiene el id
        var verElemento = document.getElementById(id); //se define la variable "el" igual a nuestro div
        verElemento.style.display = (verElemento.style.display == 'block') ? 'none' : 'block'; //damos un atributo display:none que oculta el div
        }
        }
        // window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
        
        // }
        // muestra_oculta('experienceDetails');
        // muestra_oculta('studiesDetails');







        