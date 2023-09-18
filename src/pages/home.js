import '../style.css';
import header from './header.js';

function home() {
    header();
    
    const content = document.getElementById('content');
    const homeScreen = document.createElement('div');
    const welcomeMessage = document.createElement('h1');
    welcomeMessage.textContent = "Welcome to Mi Arepita!";
    homeScreen.appendChild(welcomeMessage);

    const descriptionOne = document.createElement('h3');
    descriptionOne.textContent = "The best Colombian food this side of Colombia";
    homeScreen.appendChild(descriptionOne);

    const menu = document.createElement('button');
    menu.textContent = 'Menu';
    homeScreen.appendChild(menu);
    content.appendChild(homeScreen);
    return content;
}

export default home;