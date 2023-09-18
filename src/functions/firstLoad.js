import home from '../pages/home.js';

function firstLoad() {
    const content = document.createElement('div');
    content.id = "content";
    document.body.appendChild(content);
    home();
}

export default firstLoad;