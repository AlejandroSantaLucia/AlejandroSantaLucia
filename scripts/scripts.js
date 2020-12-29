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


// ----------- desplegar modal 

const $hideButtom1 = document.getElementById (`hide-modal1`) ;
const $hideButtom2 = document.getElementById (`hide-modal2`) ;
const $hideButtom3 = document.getElementById (`hide-modal3`) ;
const $hideButtom4 = document.getElementById (`hide-modal4`) ;
const $hideButtom5 = document.getElementById (`hide-modal5`) ;
const $hideButtom6 = document.getElementById (`hide-modal6`) ;
const $overlayModal1 = document.getElementById (`overlayModal1`) ;
const $overlayModal2 = document.getElementById (`overlayModal2`) ;
const $overlayModal3 = document.getElementById (`overlayModal3`) ;
const $overlayModal4 = document.getElementById (`overlayModal4`) ;
const $overlayModal5 = document.getElementById (`overlayModal5`) ;
const $overlayModal6 = document.getElementById (`overlayModal6`) ;
const $modal1 = document.getElementById (`modal1`) ;
const $modal2= document.getElementById (`modal2`) ;
const $modal3= document.getElementById (`modal3`) ;
const $modal4= document.getElementById (`modal4`) ;
const $modal5= document.getElementById (`modal5`) ;
const $modal6= document.getElementById (`modal6`) ;
const $btnAnimacion1 = document.getElementById (`btnAnimacion1`) ;
const $btnAnimacion2 = document.getElementById (`btnAnimacion2`) ;
const $btnAnimacion3 = document.getElementById (`btnAnimacion3`) ;
const $btnAnimacion4 = document.getElementById (`btnAnimacion4`) ;
const $btnAnimacion5 = document.getElementById (`btnAnimacion5`) ;
const $btnAnimacion6 = document.getElementById (`btnAnimacion6`) ;
 

$hideButtom1.addEventListener (`click`, () => {
    // console.log(event)
    $modal1.style.animation = `animationOut .8s forwards`;
    $overlayModal1.classList.remove(`active`)
})

$btnAnimacion1.addEventListener (`click`, () => {
    $modal1.style.animation = `animationIn .8s forwards`;
    overlayModal1.classList.add(`active`)
})
 

$hideButtom2.addEventListener (`click`, () => {
    // console.log(event)
    $modal2.style.animation = `animationOut .8s forwards`;
    $overlayModal2.classList.remove(`active`)
})

$btnAnimacion2.addEventListener (`click`, () => {
    $modal2.style.animation = `animationIn .8s forwards`;
    overlayModal2.classList.add(`active`)
})


$hideButtom3.addEventListener (`click`, () => {
    // console.log(event)
    $modal3.style.animation = `animationOut .8s forwards`;
    $overlayModal3.classList.remove(`active`)
})

$btnAnimacion3.addEventListener (`click`, () => {
    $modal3.style.animation = `animationIn .8s forwards`;
    overlayModal3.classList.add(`active`)
})


$hideButtom4.addEventListener (`click`, () => {
    // console.log(event)
    $modal4.style.animation = `animationOut .8s forwards`;
    $overlayModal4.classList.remove(`active`)
})

$btnAnimacion4.addEventListener (`click`, () => {
    $modal4.style.animation = `animationIn .8s forwards`;
    overlayModal4.classList.add(`active`)
})

$hideButtom5.addEventListener (`click`, () => {
    // console.log(event)
    $modal5.style.animation = `animationOut .8s forwards`;
    $overlayModal5.classList.remove(`active`)
})

$btnAnimacion5.addEventListener (`click`, () => {
    $modal5.style.animation = `animationIn .8s forwards`;
    overlayModal5.classList.add(`active`)
})

$hideButtom6.addEventListener (`click`, () => {
    // console.log(event)
    $modal6.style.animation = `animationOut .8s forwards`;
    $overlayModal6.classList.remove(`active`)
})

$btnAnimacion6.addEventListener (`click`, () => {
    $modal6.style.animation = `animationIn .8s forwards`;
    overlayModal6.classList.add(`active`)
})











// ------------------------ animacion $animacionLogo

const $animacionLogo = document.getElementById (`animacionLogo`)

$animacionLogo.addEventListener (`click`, (event) =>{
    // console.log(event)
       $animacionLogo.classList.toggle(`is-click`);

})





const $notificatoinButton = document.getElementById (`notificatoinButton`);
const $bell = document.getElementById (`notification`);



$notificatoinButton.addEventListener (`click`, () =>{
    const count = Number($bell.getAttribute(`data-count`)) || 0; 
    $bell.setAttribute(`data-count`, count + 1); 
    $bell.classList.add(`show-count`)  
    $bell.classList.add(`notify`) 
})

$bell.addEventListener(`animationend`, () => {
    $bell.classList.remove (`notify`)
}) 