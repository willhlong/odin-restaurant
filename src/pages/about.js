import resetContent from "../functions/reset";
import header from './header.js';

function about() {
    resetContent();
    header();
    const content = document.getElementById('content');
    const message = document.createElement('h1');
    message.textContent = 'about';
    content.appendChild(message);
}

export default about;
