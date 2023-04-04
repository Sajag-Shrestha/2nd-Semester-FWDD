option = document.querySelector('.option')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
searchNav = document.querySelector('.searchNav')

option.addEventListener('click', ()=>{
    navList.classList.toggle('v-class-resp');
    searchNav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})