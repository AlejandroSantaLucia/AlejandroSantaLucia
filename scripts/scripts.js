// Desplegar o no el contenido de los titulos principales.
    function muestra_oculta(id){
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





    // + 0 - sobre los titulos principales
document.getElementById('titleContainer1').addEventListener('click', function(){
    const icon = document.getElementById('roundRelleno');
    icon.classList.toggle('icon-plus');
    icon.classList.toggle('icon-minus');
    })
document.getElementById('titleContainer2').addEventListener('click', function(){
    const icon = document.getElementById('roundRelleno2');
    icon.classList.toggle('icon-plus');
    icon.classList.toggle('icon-minus');
    })
document.getElementById('titleContainer3').addEventListener('click', function(){
    const icon = document.getElementById('roundRelleno3');
    icon.classList.toggle('icon-plus');
    icon.classList.toggle('icon-minus');
    })
document.getElementById('titleContainer4').addEventListener('click', function(){
    const icon = document.getElementById('roundRelleno4');
    icon.classList.toggle('icon-plus');
    icon.classList.toggle('icon-minus');
    })




        