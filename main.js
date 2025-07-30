import { genererStructure } from "./modules/generer_structure.js";

export const contacts = [
  { nom: "Aymare", prenom: "Jean", numero: "0685456523" },
  { nom: "Ricault", prenom: "Léa", numero: "0645659752" },
  { nom: "Zeteaufré", prenom: "Jean", numero: "0685456523" },
];

const mainImage = document.createElement("img");
mainImage.src = "./images/contacts_accueil.png";
mainImage.width = "200";
mainImage.addEventListener("click", genererStructure);

document.body.appendChild(mainImage);
