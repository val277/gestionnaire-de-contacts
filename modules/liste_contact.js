export function afficherListeContacts(contacts) {
  //export de la fonction réutilisée dans le main.js
  const section = document.createElement("section"); //création de la section dans le HTML
  document.querySelector("main").appendChild(section); //insertion de la section dans la balise <main> du document

  const ul = document.createElement("ul"); //création d'une liste de contacts dans le HTML
  section.appendChild(ul); //ajout de la liste à la section créée plus haut

  contacts.forEach((element) => {
    //boucle forEach, qui va parcourir chaque élément du tableau
    const li = document.createElement("li"); //pour chaque contact, création d'une puce <li>
    li.textContent = `Nom: ${element.nom}, Prénom: ${element.prenom}, Numéro: ${element.numero}`; //ajout du texte en utilisant les propriétés, 'nom', 'prenom' et 'numero'
    ul.appendChild(li); //ajout de la puce <li> à la liste <ul>
  });
}
