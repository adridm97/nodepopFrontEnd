import AdFormController from "./controllers/AdFormController.js";
import MessageController from "./controllers/MessageController.js";
import DataService from "./services/DataService.js";
import LoaderController from "./controllers/LoaderController.js";

window.addEventListener("DOMContentLoaded", function () {
  if (DataService.isAuthenticed() === false) {
    window.location.href = "/login.html?next=/new.html";
  }

  const loaderDiv = document.querySelector(".loader");
  new LoaderController(loaderDiv);
  const form = document.querySelector("form");

  new AdFormController(form);

  const messages = document.querySelector(".messages");

  new MessageController(messages);
});
