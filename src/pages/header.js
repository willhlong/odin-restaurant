import home from './home.js';
import menu from './menu.js';
import about from './about.js';

function header() {
    const content = document.getElementById("content");

    const header = document.createElement('div');
    header.classList += 'header';

    const logo = document.createElement('div');
    logo.textContent = 'Mi Arepita';

    const tabs = document.createElement('div');
    tabs.classList += 'tabs-wrapper';

    const homeTab = document.createElement('div');
    homeTab.classList += 'tabs';
    homeTab.id = 'nav-home-btn';
    homeTab.textContent = 'Home';
    tabs.appendChild(homeTab);

    const menuTab = document.createElement('div');
    menuTab.classList += 'tabs';
    menuTab.id = 'nav-menu-btn';
    menuTab.textContent = 'Menu';
    tabs.appendChild(menuTab);

    const aboutTab = document.createElement('div');
    aboutTab.classList += 'tabs';
    aboutTab.id = 'nav-about-btn';
    aboutTab.textContent = 'About Us';
    tabs.appendChild(aboutTab);

    header.appendChild(logo);
    header.appendChild(tabs);
    content.appendChild(header);

    homeTab.addEventListener("click", home);
    menuTab.addEventListener("click", menu);
    aboutTab.addEventListener("click", about);

    return content;
}

export default header;