import resetContent from "../functions/reset";
import header from './header.js';

function menu() {
    resetContent();
    header();
    const content = document.getElementById('content');
    const message = document.createElement('h1');
    message.textContent = 'menu';
    content.appendChild(message);
}

export default menu;