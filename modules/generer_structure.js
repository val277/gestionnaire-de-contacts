import { listeContacts } from "./liste_contact.js";
import { ajouterContact } from "./ajouter_contact.js";
import { nombreContact } from "./nombre_contact.js";
import { contacts } from "../main.js";

export const genererStructure = function () {
  // Création du header
  const header = document.createElement("header");
  document.body.appendChild(header);

  // Création des éléments du header
  const title = document.createElement("h1");
  title.textContent = "Gestionnaire de contacts";

  const mainImage = document.querySelector("img");
  // Je retire l'événement click de l'image pour éviter de la cliquer et de relancer la fonction genererStructure
  mainImage.removeEventListener("click", genererStructure);

  // Création du select pour choisir une option
  const select = document.createElement("select");
  select.name = "dropdown";
  // Je crée les options du select
  select.append(
    new Option("Que voulez vous faire?", "ask_for"),
    new Option("Lister les contacts", "list_contact"),
    new Option("Ajouter un contact", "add_contact"),
    new Option("Voir le nombre de contacts", "count_contact")
  );

  // Je crée l'événement change pour choisir une option et lancer la fonction choisirUneOption
  select.addEventListener("change", () => {
    switch (select.value) {
      case "ask_for":
        wipeMain();
        choisirUneOption();
        break;
      case "list_contact":
        wipeMain();
        listeContacts(contacts);
        break;
      case "add_contact":
        wipeMain();
        ajouterContact(contacts);
        break;
      case "count_contact":
        wipeMain();
        nombreContact(contacts);
    }
  });

  // Ajout des éléments au header
  header.append(title, mainImage, select);

  // Création du main pour accueillir les autres sections
  const main = document.createElement("main");
  document.body.appendChild(main);

  // Je lance la fonction choisirUneOption pour afficher le texte "Choisir une option" par défaut au chargement de la page
  choisirUneOption();
};

// Section par défaut au chargement de la page
const choisirUneOption = function () {
  // Récupération du main pour s'en servir de parent
  const main = document.querySelector("main");

  // Je crée la section pour accueillir le paragraphe
  const content = document.createElement("section");

  // Je crée le paragraphe pour afficher le texte "Choisir une option" dans la section
  const data = document.createElement("p");
  data.textContent = "Choisir une option";

  // Je place le paragraphe dans la section
  content.appendChild(data);

  // Je place la section dans le main
  main.appendChild(content);
};

// Je crée la fonction wipeMain pour vider le main
const wipeMain = function () {
  const main = document.querySelector("main");
  main.innerHTML = "";
};
