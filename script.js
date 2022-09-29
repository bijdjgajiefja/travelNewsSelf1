const handBurgerIcon = document.getElementsByClassName('handburger-icon')[0];
const pageList_NavbarLinks = document.getElementsByClassName('pageList')[1];
const dropdown_content_li = document.getElementsByClassName('dropdown-content')[0];
const responsiveNav = document.getElementsByClassName('responsive-nav')[0];

// const toggleButton = document.getElementsByClassName('toggle-button')[0];
// const navbarLinks = document.getElementsByClassName('navbar-links')[0];

// const handBurgerIcon = document.getElementById('iconMenu');
// const pageList_NavbarLinks = document.getElementById('navbar-list');

handBurgerIcon.addEventListener('click', (e) => {
    e.preventDefault();
    responsiveNav.classList.getChildren[0].toggle('active');
})

// const toggleButton = document.getElementsByClassName('toggle-button')[0];
// const navbarLinks = document.getElementsByClassName('navbar-links')[0];

// toggleButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active');
// })

// handBurgerIcon -- toggleButton;
// pageList_NavbarLinks -- navbarLinks;