import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ["menu", "openIcon", "closedIcon"];

  connect() {
    console.log("hello world!");
  }

  toggleMenu() {
    this.menuTarget.classList.toggle("open");
    this.openIconTarget.classList.toggle("hidden");
    this.closedIconTarget.classList.toggle("hidden");
  }
}


