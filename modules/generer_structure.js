import { générerFormulaire } from "./ajouter_contact.js";
import { afficherListeContacts } from "./liste_contact.js";
import { contacts } from "../main.js";

export const genererStructure = function () {
  // Création du header
  const header = document.createElement("header");
  document.body.appendChild(header);

  // Création des éléments du header
  const title = document.createElement("h1");
  title.textContent = "Gestionnaire de contacts";

  const mainImage = document.querySelector("img");
  mainImage.removeEventListener("click", genererStructure);

  const select = document.createElement("select");
  select.name = "dropdown";
  select.append(
    new Option("Que voulez vous faire?", "ask_for"),
    new Option("Lister les contacts", "list_contact"),
    new Option("Ajouter un contact", "add_contact"),
    new Option("Voir le nombre de contacts", "count_contact")
  );

  select.addEventListener("change", () => {
    switch (select.value) {
      case "ask_for":
        wipeMain();
        choisirUneOption();
        break;
      case "list_contact":
        wipeMain();
        afficherListeContacts(contacts);
        break;
      case "add_contact":
        wipeMain();
        générerFormulaire(contacts);
        break;
      case "count_contact":
        wipeMain();
        console.log("count_contacteeee");
    }
  });

  // Ajout des éléments au header
  header.append(title, mainImage, select);

  // Création du main pour accueillir les autres sections
  const main = document.createElement("main");
  document.body.appendChild(main);

  choisirUneOption();
};

const choisirUneOption = function () {
  // Récupération du main pour s'en servir de parent
  const main = document.querySelector("main");

  const content = document.createElement("section");

  const data = document.createElement("p");
  data.textContent = "Choisir une option";

  content.appendChild(data);
  main.appendChild(content);
};

const wipeMain = function () {
  const main = document.querySelector("main");
  main.innerHTML = "";
};
