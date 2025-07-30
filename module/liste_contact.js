/*consignes : 
Pour chaque objet dans notre liste tu rajoutes un élément dans le html:
Parcourir la liste
Créer un element avec chaque paramètre de chaque objet en textContent
*/

export function afficherListeContacts(contacts) {
  const section = document.createElement("section"); //ici je crée ma section
  document.querySelector("main").appendChild(section);

  const ul = document.createElement("ul"); //ici je crée ma liste de contacts
  section.appendChild(ul);
  // li.textContent = `Nom: ${contacts.nom}, Prénom: ${contacts.prenom}, Numéro: ${contacts.numero}`;
  // ul.appendChild(li);

  contacts.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = `Nom: ${element.nom}, Prénom: ${element.prenom}, Numéro: ${element.numero}`;
    ul.appendChild(li);
  });
}
