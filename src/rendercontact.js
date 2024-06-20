function renderContact () {

    let contentDiv = document.querySelector("#content");
    
    const titleDiv = document.createElement("div");
    const titleName = document.createElement("h1");
    titleName.innerText = "Our Contacts:";
    titleDiv.appendChild(titleName);
    
    const contactsDiv = document.createElement("div");
    const paraName = document.createElement("p");
    paraName.innerText = "Name: Yev K";
    const paraAddress = document.createElement("p");
    paraAddress.innerText = "Address: somewhere in Brazil";
    const paraEmail = document.createElement("p");
    paraEmail.innerText = "Email: YK@yahoo.be";
    contactsDiv.appendChild(paraName);
    contactsDiv.appendChild(paraAddress);
    contactsDiv.appendChild(paraEmail);
    
    
    contentDiv.appendChild(titleDiv);
    contentDiv.appendChild(contactsDiv);
}
    
export default renderContact;