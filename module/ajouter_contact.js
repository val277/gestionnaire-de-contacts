export function générerFormulaire(contacts) {
  // création de la section formulaire
  const sectionFormulaire = document.createElement("section");
  // placer cette section dans le body
  document.body.appendChild(sectionFormulaire);

  //   création formulaire
  const formulaire = document.createElement("form");

  // placer le form dans la section
  sectionFormulaire.appendChild(formulaire);

  //   création du label nom
  const labelNom = document.createElement("label");
  labelNom.setAttribute("for", "nom");
  labelNom.textContent = "Entrez votre nom";
  //   placer le label dans le form
  formulaire.appendChild(labelNom);
  //  création de l'input nom
  const inputNom = document.createElement("input");
  inputNom.setAttribute("type", "text");
  inputNom.setAttribute("name", "nom");
  inputNom.id = "nom";
  inputNom.placeholder = "Votre nom ici";
  //   je place mon input nom apres le label nom
  labelNom.after(inputNom);

  //   création du label prenom
  const labelPrenom = document.createElement("label");
  labelPrenom.setAttribute("for", "prenom");
  labelPrenom.textContent = "Entrez votre prenom";
  //   placer le label dans le form
  formulaire.appendChild(labelPrenom);
  //  création de l'input prenom
  const inputPrenom = document.createElement("input");
  inputPrenom.setAttribute("type", "text");
  inputPrenom.setAttribute("name", "prenom");
  inputPrenom.id = "prenom";
  inputPrenom.placeholder = "Votre prenom ici";
  //   je place mon input prenom apres le label prenom
  labelPrenom.after(inputPrenom);

  //   création du label numero
  const labelNumero = document.createElement("label");
  labelNumero.setAttribute("for", "numero");
  labelNumero.textContent = "Entrez votre numero";
  //   placer le label dans le form
  formulaire.appendChild(labelNumero);
  //  création de l'input numero
  const inputNumero = document.createElement("input");
  inputNumero.setAttribute("type", "number");
  inputNumero.setAttribute("name", "numero");
  inputNumero.id = "numero";
  inputNumero.placeholder = "Votre numero ici";
  //   je place mon input numero apres le label numero
  labelNumero.after(inputNumero);

  //   création du boutton d'envoi
  const bouttonEnvoi = document.createElement("input");
  bouttonEnvoi.setAttribute("type", "submit");
  bouttonEnvoi.value = "envoyer";

  //   placer le boutton apres le dernier input
  inputNumero.after(bouttonEnvoi);

  // action de récupération des données du formulaire par le click du boutton envoyer

  bouttonEnvoi.addEventListener("click", function (event) {
    event.preventDefault();
    const contact = {};
    contact.nom = inputNom.value;
    contact.prenom = inputPrenom.value;
    contact.numero = inputNumero.value;

    contacts.push(contact);
    console.log(contact);
  });
}
