// User.js
export default class User {
  constructor(userData) {
    this.title = userData.name.title;
    this.firstName = userData.name.first;
    this.lastName = userData.name.last;
    this.city = userData.location.city;
    this.country = userData.location.country;
    this.age = userData.dob.age;
    this.email = userData.email;
    this.picture = userData.picture.large;
    this.isPresent = false; // Par défaut, l'utilisateur n'est pas présent
    this.userElement = null; // Sera défini lors de la génération de l'élément
  }

  generateUserElement() {
    this.userElement = document.createElement("div");
    this.userElement.classList.add("user");
    this.userElement.setAttribute("data-present", this.isPresent.toString());
    const userHTML = `
        <img src="${this.picture}">
        <div class="user--info">
          <h1>${this.title} ${this.firstName} ${this.lastName}</h1>
          <p>${this.age} years old</p>
          <p>${this.city}, ${this.country}</p>
        </div>
        <a href="mailto:${this.email}">
          <span class="mail">✉️</span>
        </a>
      `;
    this.userElement.insertAdjacentHTML("afterbegin", userHTML);
    this.addClickListener();
  }

  render() {
    const mainElement = document.querySelector("main");
    mainElement.appendChild(this.userElement);
  }

  togglePresence() {
    this.isPresent = !this.isPresent;
    this.userElement.setAttribute("data-present", this.isPresent.toString());
    this.userElement.style.backgroundColor = this.isPresent
      ? "#06d6a0"
      : "#ffffff";
    const pElements = this.userElement.querySelectorAll("p");
    pElements.forEach((p) => {
      p.style.color = this.isPresent ? "#ffffff" : "#000000";
    });
  }

  addClickListener() {
    this.userElement.addEventListener("click", () => this.togglePresence());
  }
}
