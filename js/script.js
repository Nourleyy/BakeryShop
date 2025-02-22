var searchButton = document.querySelector('#search-btn');
var searchBar = document.querySelector('.search-bar-container');
var formBtn = document.querySelector('#login-btn');
var loginForm = document.querySelector('.login-form-container');
var closeBtn = document.querySelector('#form-close');
var menu = document.querySelector('#menu-bar');
var navbar = document.querySelector('.navbar');
var vidBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () => {
    searchButton.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}
menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
searchButton.addEventListener('click', () => {
    searchButton.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

formBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    loginForm.classList.remove('active');
});

vidBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        var src = btn.getAttribute('data-src');
        document.querySelector('#videobg').src = src;
    });
});


const reviewContent = document.querySelector('.review-content');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');

    let currentIndex = 0;

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : reviewContent.children.length - 1;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < reviewContent.children.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });

    function updateSlider() {
        const offset = -currentIndex * 100;
        reviewContent.style.transform = `translateX(${offset}%)`;
    }