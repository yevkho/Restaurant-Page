import Image from "./images/burger.png"//delete for local

function renderHome () {
    //select content div
    let contentDiv = document.querySelector("#content");

    //first div
    const introDiv = document.createElement("div");
    introDiv.setAttribute('class', 'intro')

    const headingOne = document.createElement("h1");
    headingOne.innerText = "Welcome to YevTapas Bar!";
    const headingTwo = document.createElement("h2");
    headingTwo.innerText = "Our Go-To Burger";
    // introDiv.appendChild(headingOne);
    // introDiv.appendChild(headingTwo);
    introDiv.append(headingOne, headingTwo);

    const imageElement = document.createElement("img");
    imageElement.src = Image;
    // imageElement.src = './images/burger.png';
    imageElement.setAttribute('height', '310')
    imageElement.setAttribute('width', '410')
    introDiv.appendChild(imageElement);

    //second div
    const aboutDiv = document.createElement("div");
    aboutDiv.setAttribute('class', 'about')

    const headingThree = document.createElement("h3");
    headingThree.innerText = "Who We Are:";
    const para = document.createElement('p');
    para.innerText = "YevTapas has the best burger in town! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
    aboutDiv.appendChild(headingThree);
    aboutDiv.appendChild(para);

    //add to content div
    contentDiv.appendChild(introDiv);
    contentDiv.appendChild(aboutDiv);
}

export default renderHome