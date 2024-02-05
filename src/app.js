"use strict";
import User from './modules/User.js';


async function fetchUsers() {
  const response = await fetch('https://randomuser.me/api/?results=20');
  const data = await response.json();
  data.results.forEach(userData => {
    const user = new User(userData);
    user.generateUserElement();
    user.render();
  });
}

fetchUsers();