// définir la largeur de la sidebar a 100vw et faire un overflow hidden

function openNav() {
  document.getElementById("mySidebar").style.width = "100vw";
  document.querySelector("body").style.overflow = "hidden";
}
// définir la largeur de la sidebar a 0 et faire un overflow auto

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.querySelector("body").style.overflow = "auto";
}

// formulaire contact
function sendMail() {
  // Récupérer les valeurs des champs du formulaire
  var sendername = document.querySelector("#sendername").value;
  var sendername2 = document.querySelector("#sendername2").value;
  var mobile = document.querySelector("#mobile").value;
  var replyto = document.querySelector("#replyto").value;
  var message = document.querySelector("#message").value;

  // Vérifier si tous les champs sont renseignés
  if (
    sendername.trim() === "" ||
    sendername2.trim() === "" ||
    mobile.trim() === "" ||
    replyto.trim() === "" ||
    message.trim() === ""
  ) {
    alert(
      "Veuillez remplir les champs obligatoires du formulaire avant d'envoyer le message."
    );
    return; // Ne pas continuer si les champs ne sont pas tous renseignés
  }

  // Initialiser Email.js
  (function () {
    emailjs.init("USBo5-cOim3__bC8Z");
  })();

  // Paramètres du courriel
  var params = {
    sendername: sendername,
    sendername2: sendername2,
    to: "diagenergy@outlook.fr",
    // replyto: replyto,
    message:
      "Mobile: " + mobile + "\n\n" + "Mail: " + replyto + "\n\n" + message,
  };

  // Identifiants du service et du modèle Email.js
  var serviceID = "service_4cc7nye";
  var templateID = "template_t376uhm";

  // Envoyer le courriel
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      alert("Message envoyé avec succès !");
      document.querySelector("#sendername").value = "";
      document.querySelector("#sendername2").value = "";
      document.querySelector("#mobile").value = "";
      document.querySelector("#replyto").value = "";
      document.querySelector("#message").value = "";
    })
    .catch((error) => {
      console.error("Erreur lors de l'envoi du courriel :", error);
      alert(
        "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer."
      );
    });
}

//FAQ//
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));
//FAQ//

document.addEventListener("DOMContentLoaded", function () {
  var scrollButton = document.getElementById("scroll_to_top");

  window.onscroll = function () {
    // Affiche ou masque le bouton en fonction du défilement de la page
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  };
});

function scrollToTop() {
  // Fonction pour faire défiler la page vers le haut
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
