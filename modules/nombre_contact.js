export function afficherMessageUtilisateur(contacts) {
  const section = document.createElement("section"); // Créer un paragraphe <p>
  document.querySelector("main").appendChild(section);

  const message = document.createElement("p");
  message.textContent = contacts.length; // j'ajoute le texte en prenant la longueur du tableau
  section.appendChild(message); // j’ajoute le message à la page
}
