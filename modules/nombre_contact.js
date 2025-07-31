export function afficherMessageUtilisateur(contacts) {
  //export de la fonction réutilisée dans le main.js
  const section = document.createElement("section"); //création de la section dans le HTML
  section.classList.add("nombreContact"); //création de la class
  document.querySelector("main").appendChild(section); //insertion de la section dans la balise <main> du document

  const message = document.createElement("p"); //création de l'élément <p> dans le HTML
  message.textContent = `Vous avez ${contacts.length} contacts`; // ajout du texte dans le paragraphe, la variable s'appuie sur la longueur du tabaleau pour afficher le nombre de contacts
  section.appendChild(message); // ajout du message dans la section créée au-dessus
}
