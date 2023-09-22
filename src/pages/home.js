import '../style.css';
import menu from './menu';
import resetContent from '../functions/reset.js';
import header from './header.js';

function home() {
    resetContent();
    header();
    const content = document.getElementById('content');
    const homeScreen = document.createElement('div');
    homeScreen.classList.add('home-content');
    const welcomeMessage = document.createElement('h1');
    welcomeMessage.textContent = "Welcome to Mi Arepita!";
    homeScreen.appendChild(welcomeMessage);

    const descriptionOne = document.createElement('h3');
    descriptionOne.textContent = "The best Colombian food this side of Colombia";
    homeScreen.appendChild(descriptionOne);

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', menu);
    homeScreen.appendChild(menuBtn);
    content.appendChild(homeScreen);
}

export default home;