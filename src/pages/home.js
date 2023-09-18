import menu from "./menu";
import '../style.css';

function home() {
    const content = document.createElement('div');
    content.id = 'content';

    const header = document.createElement('div');
    header.classList += 'header';

    const logo = document.createElement('div');
    logo.textContent = 'Mi Arepita';

    const tabs = document.createElement('div');
    tabs.classList += 'tabs-wrapper';

    const homeTab = document.createElement('div');
    homeTab.classList += 'tabs';
    homeTab.textContent = 'Home';
    tabs.appendChild(homeTab);

    const menuTab = document.createElement('div');
    menuTab.classList += 'tabs';
    menuTab.textContent = 'Menu';
    tabs.appendChild(menuTab);

    const aboutTab = document.createElement('div');
    aboutTab.classList += 'tabs';
    aboutTab.textContent = 'About Us';
    tabs.appendChild(aboutTab);

    header.appendChild(logo);
    header.appendChild(tabs);
    content.appendChild(header);

    return content;

}

export default home;