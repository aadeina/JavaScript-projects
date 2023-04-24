// Récupération des éléments du formulaire
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const prenom = document.querySelector("#prenom");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

// Regex pour valider le nom d'utilisateur (lettres minuscules et majuscules uniquement, 3 à 10 caractères)
const usernameRegex = /^[a-zA-Z]{3,10}$/;
// Regex pour valider le prénom (lettres minuscules et majuscules uniquement, 3 à 10 caractères)
const prenomRegex = /^[a-zA-Z]{3,10}$/;
// Regex pour valider l'adresse email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Regex pour valider le mot de passe (au moins 8 caractères, avec au moins une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial)
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*\s.*$/;

// Ajout d'un écouteur d'événement sur la soumission du formulaire
form.addEventListener("submit", (event) => {
  let valid = true;

  // Validation du nom d'utilisateur
  if (!usernameRegex.test(username.value)) {
    valid = false;
    setErrorFor(
      username,
      "Le nom d'utilisateur doit contenir de 3 à 10 lettres minuscules ou majuscules."
    );
  } else {
    setSuccessFor(username);
  }

  // Validation du prénom
  if (!prenomRegex.test(prenom.value)) {
    valid = false;
    setErrorFor(
      prenom,
      "Le prénom doit contenir de 3 à 10 lettres minuscules ou majuscules."
    );
  } else {
    setSuccessFor(prenom);
  }

  // Validation de l'adresse email
  if (!emailRegex.test(email.value)) {
    valid = false;
    setErrorFor(email, "L'adresse email n'est pas valide.");
  } else {
    setSuccessFor(email);
  }

  // Validation du mot de passe
  if (!passwordRegex.test(password.value)) {
    valid = false;
    setErrorFor(
      password,
      "Le mot de passe doit contenir au moins 8 caractères, avec au moins une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial."
    );
  } else {
    setSuccessFor(password);
  }

  // Empêcher la soumission du formulaire si tous les champs ne sont pas valides
  if (!valid) {
    event.preventDefault();
  }
});

// Fonction pour afficher un message d'erreur et mettre en surbrillance le champ en rouge
function setErrorFor(input, message) {
  const inputControl = input.parentElement;
  const error = inputControl.querySelector(".error");
  inputControl.classList.remove("success");
  inputControl.classList.add("error");
  error.innerText = message;
}

// Fonction pour mettre en surbrillance le champ en vert en cas de validation réussie
function setSuccessFor(input) {
  const inputControl = input.parentElement;
  inputControl.classList.remove("error");
  inputControl.classList.add("success");
}
