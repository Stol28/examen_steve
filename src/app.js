"use strict";
import User from './modules/User.js';

let users = []; // Stocke les instances de User

async function fetchUsers() {
  const response = await fetch('https://randomuser.me/api/?results=20');
  const data = await response.json();
  users = data.results.map(userData => new User(userData)); // Crée et stocke les instances de User
  displayUsers(); // Affiche les utilisateurs initialement par nom
}

function displayUsers() {
  const main = document.querySelector('main');
  main.innerHTML = ''; // Vide le main avant de réafficher les utilisateurs
  users.forEach(user => {
    user.generateUserElement();
    user.render();
  });
}

function sortByAge() {
  users.sort((a, b) => a.age - b.age); // Suppose que chaque instance de User a une propriété `age`
  displayUsers();
}

function sortByName() {
  users.sort((a, b) => a.lastName.localeCompare(b.lastName)); // Suppose que chaque instance de User a une propriété `lastName`
  displayUsers();
}
updateButtonState('sort--name');

// Ajout des écouteurs d'événements aux boutons
document.getElementById('sort--name').addEventListener('click', () => {
  sortByName();
  updateButtonState('sort--name');
});

document.getElementById('sort--age').addEventListener('click', () => {
  sortByAge();
  updateButtonState('sort--age');
});

function updateButtonState(selectedButtonId) {
  document.querySelectorAll('button').forEach(button => {
    button.classList.remove('selected');
  });
  document.getElementById(selectedButtonId).classList.add('selected');
}

fetchUsers();
