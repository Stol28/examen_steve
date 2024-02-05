"use strict";
import User from './modules/User.js';

async function fetchUsers() {
  const response = await fetch('https://randomuser.me/api/?results=20');
  const data = await response.json();
  const users = data.results.map(userData => new User(userData));
  // Trier les utilisateurs par nom de famille
  users.sort((a, b) => a.lastName.localeCompare(b.lastName));
  users.forEach(user => {
    user.generateUserElement();
    user.render();
  });
}

fetchUsers();
