export function afficherMessageUtilisateur(contacts) {
  const section = document.createElement("section");
  section.classList.add("nombreContact");
  // Créer un paragraphe <p>
  document.querySelector("main").appendChild(section);

  const message = document.createElement("p");
  // j'ajoute le texte en prenant la longueur du tableau
  message.textContent = `Vous avez ${contacts.length} contacts`; // j'ajoute le texte en prenant la longueur du tableau
  section.appendChild(message); // j’ajoute le message à la page
}
