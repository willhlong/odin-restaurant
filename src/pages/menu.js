import resetContent from "../functions/reset";
import header from './header.js';

function menu() {
    resetContent();
    header();
    const content = document.getElementById('content');
    const message = document.createElement('h1');
    message.textContent = 'menu';

    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items-wrapper');

    const item1 = document.createElement('div');
    item1.textContent = 'first food item...';
    menuItems.appendChild(item1);

    const item2 = document.createElement('div');
    item2.textContent = 'second food item...';
    menuItems.appendChild(item2);
    
    const item3 = document.createElement('div');
    item3.textContent = 'third food item...';
    menuItems.appendChild(item3);
    
    const item4 = document.createElement('div');
    item4.textContent = 'fourth food item...';
    menuItems.appendChild(item4);
    
    const item5 = document.createElement('div');
    item5.textContent = 'fifth food item...';
    menuItems.appendChild(item5);
    
    const item6 = document.createElement('div');
    item6.textContent = 'sixth food item...';
    menuItems.appendChild(item6);
    
    content.appendChild(message);
    content.appendChild(menuItems);
}

export default menu;