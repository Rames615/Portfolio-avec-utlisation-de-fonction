const heroElement = document.querySelector("header");

const mainElement = document.querySelector("main")

const footerElement = document.querySelector("footer")

console.log(heroElement,mainElement,footerElement,);

// heroElement.style.display = "none";
// mainElement.style.display = "none";
// footerElement.style.display = "none";

// function hideSection() {
//     const heroElement = document.querySelector("header"); 
//     if (heroElement) {
//         heroElement.style.display = "none"; 
//     }
// }
// hideSection();

 function displaySection(){
    const heroElement = document.querySelector("header");
    if (heroElement){
        heroElement.style.display = " yes";
    }
 }
 displaySection();