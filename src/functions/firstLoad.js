import home from '../pages/home.js';
import header from '../pages/header.js';
import addListeners from './listeners.js';

function firstLoad() {
    const content = document.createElement('div');
    content.id = "content";
    document.body.appendChild(content);
    home();
}

export default firstLoad;