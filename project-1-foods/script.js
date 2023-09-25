const icons = document.querySelectorAll('.section-1-icons i');

let counter = 1;
setInterval(() => {
    counter++;
    const icon = document.querySelector('.section-1-icons .change');

    icon.classList.remove('change')

    if (counter > icons.length) {
        icons[0].classList.add('change');
        counter = 1;
    } else {
        icon.nextElementSibling.classList.add('change')
    }

}, 4000)


const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active')
    menu.classList.toggle('active')
});