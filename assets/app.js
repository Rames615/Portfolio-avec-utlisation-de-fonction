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



 /////////////////////////////// for myself practice////////////////////////////////:

 document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent actual submission
  
      // Get form values
      const nom = document.getElementById("nom").value.trim();
      const prenom = document.getElementById("prénom").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      // Simple validation
      if (nom === "" || prenom === "" || email === "" || message === "") {
        alert("Tous les champs doivent être remplis.");
        return;
      }
  
      if (!validateEmail(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return;
      }
  
      // If everything is valid, simulate form submission (you can replace this with AJAX)
      alert("Formulaire envoyé avec succès !");
      form.submit();
    });
  
    // Email validation function
    function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  });
  