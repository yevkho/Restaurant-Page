function renderMenu () {

let contentDiv = document.querySelector("#content");

const titleDiv = document.createElement("div");
const titleName = document.createElement("h1");
titleName.innerText = "Menu";
titleDiv.appendChild(titleName);

const menulistDiv = document.createElement("div");
const para = document.createElement("p");
para.innerText = "We serve Tapas and Sparkling Water";
menulistDiv.appendChild(para);


contentDiv.appendChild(titleDiv);
contentDiv.appendChild(menulistDiv);
}

export default renderMenu;