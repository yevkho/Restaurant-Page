import renderHome from "./renderhome.js";
import renderMenu from "./rendermenue.js";
import renderContact from "./rendercontact.js";
import './styles.css';

// renderHome();
document.addEventListener('DOMContentLoaded', () => {
    renderHome();
})

const homeButton = document.querySelector('#homeButton');
const menuButton = document.querySelector('#menuButton');
const contactButton = document.querySelector('#contactButton');

homeButton.addEventListener('click', () => {
    let contentDiv = document.querySelector("#content");
    contentDiv.replaceChildren();
    renderHome();
})

menuButton.addEventListener('click', () => {
    let contentDiv = document.querySelector("#content");
    contentDiv.replaceChildren();
    renderMenu();
})

contactButton.addEventListener('click', () => {
    let contentDiv = document.querySelector("#content");
    contentDiv.replaceChildren();
    renderContact();
})