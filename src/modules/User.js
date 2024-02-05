
export default class User {
  constructor(user) {
    this.title = user.name.title;
    this.firstName = user.name.first;
    this.lastName = user.name.last;
    this.city = user.location.city;
    this.country = user.location.country;
    this.age = user.dob.age;
    this.email = user.email;
    this.picture = user.picture.large;
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
    this.userElement.addEventListener("click", () => this.togglePresence());
  }

  render() {
    const mainElement = document.querySelector("main");
    if (mainElement && this.userElement) {
      mainElement.appendChild(this.userElement);
    }
  }

  togglePresence() {
    this.isPresent = !this.isPresent;
    this.userElement.setAttribute("data-present", this.isPresent.toString());
    if (this.isPresent) {
      this.userElement.style.backgroundColor = "#06d6a0";
      this.userElement.style.color = "#ffffff";
    } else {
      this.userElement.style.backgroundColor = "";
      this.userElement.style.color = "";
    }
  }
}
