import { genererStructure } from "./modules/generer_structure.js";

const mainImage = document.createElement("img");
mainImage.src = "./images/contacts_accueil.png";
mainImage.width = "200";
mainImage.addEventListener("click", genererStructure);

document.body.appendChild(mainImage);
