document.addEventListener('DOMContentLoaded', () => {

    // on fait changer le background url la section de la page qui porte l'id "home" à l'aide des images du dossier images toute les 4 secondes avec un effet de fondu
    let i = 0;
    let images = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg'];
    let home = document.getElementById('home');
    setInterval(() => {
        console.log('hello');
        console.log('world');
        i = (i + 1) % images.length;
        home.style.backgroundImage = `url(${images[i]})`;
        home.style.transition = 'background 1s';
    }, 3000);




});


