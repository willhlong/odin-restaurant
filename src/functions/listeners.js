    import home from '../pages/home.js';
    import menu from '../pages/menu.js';
    import about from '../pages/about.js';

    function addListeners() {
    const homeTab  = document.getElementById('nav-home-btn');
    const menuTab  = document.getElementById('nav-menu-btn');
    const aboutTab = document.getElementById('nav-about-btn');

    homeTab.addEventListener("click", home);
    menuTab.addEventListener("click", menu);
    aboutTab.addEventListener("click", about);
}

export default addListeners;